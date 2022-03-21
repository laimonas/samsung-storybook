import { ReactNode } from "react";
import { ColumnProps } from "primereact/column";
import { DropdownProps } from "primereact/dropdown";
import { ISDropdownOption, ISDropdownOptionGrouped} from "../../../interfaces";

export interface ISDropdownFilter {
    /**
     * Type of filtering like contains, in, equals
     */
    filtering?: ColumnProps["filterMatchMode"];
    /**
     * current index of the filter in state array
     */
    filterIndex: number;
    /**
     * field name used to filter
     */
    fieldName: string;
    /**
     * You can pass children like a label or icon
     */
    className?: string;
    /**
     * Chosen Dropdown Value
     */
    dropdownValue: string;
    /**
     * Chosen Dropdown Value
     */
    options?: ISDropdownOption[] | ISDropdownOptionGrouped[];
    /**
     * Function that renders custom component as label. Takes option as argument.
     */
    customLabelTemplate?: (option: ISDropdownOption) => ReactNode;
    /**
     * Uses Special Template for Group Header
     */
    grouped: boolean;
    /**
     * Placeholder for Input Text
     */
    placeholder: string;
    onChangeDropdownValue: (
        e: DropdownProps["onChange"],
        fieldName: string,
        index: number,
        dataType: string,
        filtering?: ColumnProps["filterMatchMode"],
        clear?: boolean
    ) => void;
    /**
     * Show clear indicator
     */
    showClear: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    dataType: string;
}
