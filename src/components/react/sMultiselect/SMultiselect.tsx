import React from "react";
import { MultiSelect } from "primereact/multiselect";
import classNames from "classnames";

import { PanelFooterTemplate, PanelHeaderTemplate } from "./SPanelTemplates";
import { IPanelHeaderOptions, ISMultiselectProps, LabelName } from "./models";

const SMultiselect: React.FunctionComponent<ISMultiselectProps> = ({
    className,
    options,
    placeholder,
    showClear,
    selectedOptions,
    disabled,
    filter,
    filterMatchMode,
    filterPlaceholder,
    resetFilterOnHide,
    headerCloseButton,
    selectedItemsLabel,
    tableFilteringProps,
    selectedItemsTemplate,
    itemsTemplate,
    setSelectedOptions,
}) => {
    const grouped = options.length && LabelName.GROUP_CHILDREN in options[0];
    const footerLabel = selectedOptions && selectedOptions.length > 0 ? `${selectedOptions.length} ${selectedItemsLabel}` : "";

    const onOptionChange = (e: any) => {
        if (tableFilteringProps) {
            const { tableFilterMatchMode, tableFilterIndex, tableFieldName, dataType, onOptionSelect } = tableFilteringProps;

            onOptionSelect(e, tableFieldName, tableFilterIndex, dataType, tableFilterMatchMode);
        } else {
            setSelectedOptions && setSelectedOptions(e.value);
        }
    };

    return (
        <div
            className={classNames(
                "s-multiselect",
                `${tableFilteringProps ? "s-multiselect-table" : "s-multiselect-standalone"}`,
                className
            )}
        >
            <MultiSelect
                value={selectedOptions}
                options={options}
                optionLabel={LabelName.OPTION}
                selectedItemTemplate={selectedItemsTemplate}
                itemTemplate={itemsTemplate}
                optionGroupLabel={grouped ? LabelName.GROUP : undefined}
                optionGroupChildren={grouped ? LabelName.GROUP_CHILDREN : undefined}
                placeholder={placeholder}
                showClear={showClear}
                disabled={disabled}
                filter={filter}
                filterMatchMode={filterMatchMode}
                filterPlaceholder={filterPlaceholder}
                resetFilterOnHide={resetFilterOnHide}
                onChange={(e) => onOptionChange(e)}
                panelFooterTemplate={() => <PanelFooterTemplate selectedItemsLabel={footerLabel} />}
                panelHeaderTemplate={(options: IPanelHeaderOptions) => (
                    <PanelHeaderTemplate options={options} closeButton={headerCloseButton} />
                )}
                panelClassName="s-multiselect-panel"
            />
        </div>
    );
};

export default SMultiselect;
