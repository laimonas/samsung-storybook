import React from "react";
import classNames from "classnames";
import { Dropdown } from "primereact/dropdown";

import { ISDropdownFilter} from "./models";
import { DoneSelected16px } from "../../../resources";
import {ISDropdownOption, ISDropdownOptionGrouped} from "../../interfaces";

export const SDropdownFilter: React.FunctionComponent<ISDropdownFilter> = (props) => {
    const {
        className,
        dropdownValue,
        onChangeDropdownValue,
        options,
        customLabelTemplate,
        grouped,
        placeholder,
        showClear,
        fieldName,
        filterIndex,
        filtering,
        dataType,
    } = props;

    const groupedItemTemplate = (option: ISDropdownOptionGrouped) => {
        return (
            <div className="SDropdownFilter-group">
                <div>{option.label}</div>
            </div>
        );
    };

    const itemTemplate = (option: ISDropdownOption) => {
        return (
            <div className="SDropdownFilter-item-wrapper">
                {customLabelTemplate && typeof customLabelTemplate === "function" ? customLabelTemplate(option) : <div>{option.label}</div>}
                {option.label === dropdownValue && <DoneSelected16px />}
            </div>
        );
    };

    const selectedValueTemplate = (option: ISDropdownOption, props: { placeholder: string }) => {
        if (option) {
            return customLabelTemplate && typeof customLabelTemplate === "function" ? (
                customLabelTemplate(option)
            ) : (
                <span>{option.label}</span>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    return (
        <div className={classNames("SDropdownFilter", className)}>
            <Dropdown
                {...props}
                value={dropdownValue}
                valueTemplate={selectedValueTemplate}
                options={options}
                onChange={(e) => onChangeDropdownValue(e as any, fieldName, filterIndex, dataType, filtering)}
                optionGroupTemplate={grouped && groupedItemTemplate}
                placeholder={placeholder}
                className="p-column-filter"
                optionLabel={"label"}
                itemTemplate={itemTemplate}
                showClear={showClear}
            />
        </div>
    );
};
