import React from "react";
import { ColumnProps } from "primereact/column";
import { MultiSelectPanelHeaderTemplateParams } from "primereact/multiselect";

import { ISDropdownOption, ISDropdownOptionGrouped } from "../../../interfaces";

export interface ISMultiselectProps {
    /**
     * Custom style class name.
     */
    className?: string;
    /**
     * Array of option items to be displayed in the dropdown.
     */
    options: ISDropdownOption[] | ISDropdownOptionGrouped[];
    /**
     * Default text displayed when no option is selected.
     */
    placeholder?: string;
    /**
     * Displays the button used to clear selected options.
     */
    showClear?: boolean;
    /**
     * Options currently selected.
     */
    selectedOptions: string[];
    /**
     * Disables the dropdown.
     */
    disabled?: boolean;
    /**
     * Enables option filtering.
     */
    filter?: boolean;
    /**
     * Defines how options are fitered. Posible values: "contains", (default) "startsWith", "endsWith", "equals" and "notEquals".
     */
    filterMatchMode?: "contains" | "startsWith" | "endsWith" | "equals" | "notEquals";
    /**
     * Default text displayed in the filter input.
     */
    filterPlaceholder?: string;
    /**
     * Resets filter value when dropdown is closed.
     */
    resetFilterOnHide?: boolean;
    /**
     * Use header button for closing.
     */
    headerCloseButton?: boolean;
    /**
     * Label displayed in footer when options are selected. Count is included.
     */
    selectedItemsLabel?: string;
    /**
     * Object with table filtering params.
     *
     * tableFilterMatchMode: string - 'startsWith' | 'contains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte';
     *
     * tableFilterIndex: number - current index of the filter in state array
     *
     * tableFieldName: string - field name used in table column for filtering
     *
     * dataType: string;
     *
     * onOptionSelect: (
     *    e: ChangeParams,
     *    fieldName: string,
     *    index: number,
     *    filtering: FilterMatchModeType,
     *    dataType: string,
     *    clear?: boolean
     * ) => void;
     *
     */
    tableFilteringProps?: ITableFilteringProps;
    /**
     * Set selected options. Use state.
     */
    setSelectedOptions?: (values: string[]) => void;
    /**
     * Set a template for the items, that are selected
     */
    selectedItemsTemplate?: (option: ISDropdownOption[] | ISDropdownOptionGrouped[]) => React.ReactNode;
    /**
     * set a template for the items inside the list
     */
    itemsTemplate?: (option: ISDropdownOption) => React.ReactNode;
}

export type OnOptionSelectFunction = (
    e: any,
    fieldName: string,
    index: number,
    dataType: string,
    filtering?: ColumnProps["filterMatchMode"],
    clear?: boolean
) => void;

export interface ITableFilteringProps {
    tableFilterMatchMode: ColumnProps["filterMatchMode"];
    tableFilterIndex: number;
    tableFieldName: string;
    dataType: string;
    onOptionSelect: OnOptionSelectFunction;
}

export enum LabelName {
    OPTION = "label",
    GROUP = "label",
    GROUP_CHILDREN = "items",
}

export interface IPanelFooterTemplate {
    selectedItemsLabel: string;
}

export interface IPanelHeaderTemplate {
    options: IPanelHeaderOptions;
    closeButton?: boolean;
}

export interface IPanelHeaderOptions extends Omit<MultiSelectPanelHeaderTemplateParams, "props"> {
    props: IPanelHeaderOptionsProps;
}

export interface IPanelHeaderOptionsProps {
    allSelected: boolean;
    filter: boolean;
    filterPlaceholder: string;
    filterValue: string;
    onFilter: (e: IOnFilterEvent) => void;
}

export interface IOnFilterEvent<T = KeyboardEvent> {
    originalEvent?: React.SyntheticEvent<T>;
    query: string;
}
