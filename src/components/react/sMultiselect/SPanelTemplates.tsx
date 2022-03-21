import React from "react";

import SSearchInputFilter from "../sSearchInputFilter/SSearchInputFilter";
import SButton from "../sButton/SButton";
import SIcon from "../sIcon/SIcon";
import { IPanelFooterTemplate, IPanelHeaderTemplate } from "./models";

const PanelFooterTemplate: React.FunctionComponent<IPanelFooterTemplate> = ({ selectedItemsLabel }) => {
    return (
        <div className="s-panel-footer">
            {selectedItemsLabel && <span>{selectedItemsLabel}</span>}
            &nbsp;
        </div>
    );
};

const PanelHeaderTemplate: React.FunctionComponent<IPanelHeaderTemplate> = ({ options, closeButton }) => {
    let { props: filterProps, checkboxElement, filterElement, closeElement, onCloseClick } = options;
    const { filter, filterValue, filterPlaceholder, onFilter } = filterProps;

    const filterOptions = (value: string) => {
        onFilter({
            query: value,
        });
    };

    filterElement = <SSearchInputFilter searchValue={filterValue} setSearchValue={filterOptions} placeholder={filterPlaceholder} />;

    closeElement = (
        <SButton className="btn-icon large" onClick={onCloseClick}>
            <SIcon className="black medium" iconName="CancelClose" />
        </SButton>
    );

    return (
        <div className="s-panel-header">
            <div>{checkboxElement}</div>
            {filter && <div className="s-panel-header__filter">{filterElement}</div>}
            {closeButton && <div className="s-panel-header__close">{closeElement}</div>}
        </div>
    );
};

export { PanelFooterTemplate, PanelHeaderTemplate };
