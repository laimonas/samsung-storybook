import { ReactNode } from "react";
import { DataTableProps } from "primereact/datatable";
import { ColumnProps } from "primereact/column";

import {ISDropdownOption, ISDropdownOptionGrouped} from "../../../interfaces";

export interface ISTable {
    className?: string;
    /**
     * Shows the Report f.e. 1 of 10 from 200
     */
    showReport?: boolean;
    /**
     * Shows rows per page dropdown
     */
    showRowsPerPage?: boolean;
    /**
     * Data
     */
    data?: ISTableData[];
    /**
     * Column configuration like sortable, cellTemplate, headerName, filterType
     */
    columns: ISTableColumn[];
    /**
     * amount of rows shown per default
     */
    rows?: number;
    /**
     * Options in the Rows per Page dropdown
     */
    rowsPerPageOptions?: number[];
    /**
     * locale that is used for date and price format
     */
    locale?: string;
    /**
     * you can pass an object of custom cell templates, consider referencing your custom template function in your column configuration
     */
    customTemplates?: ISTableCustomTemplate;
    /**
     * Array with the set search filters containing name and value
     */
    searchFilters?: ISTableFilter[];
    /**
     * Updates search filters
     * @param filters get the array of ISTableFilter
     */
    setSearchFilters?: (filters: ISTableFilter[]) => void;
    /**
     * Define whether to show pagination or not
     */
    showPagination?: boolean;
    /**
     * lazyParams that gonna be send to your api for sorting, pagination, etc.
     */
    lazyParams?: ISTableLazyParams;
    setLazyParams?: (params: ISTableLazyParams) => void;
    /**
     * Total Records have to be send if you use lazyLoading if not its gonna be determined by data.length
     */
    totalRecords?: number;
    /**
     * activate lazyLoading
     */
    lazyLoad?: boolean;
    /**
     * show loading spinner
     */
    loading?: boolean;
    /**
     * Sets Label for Per Page Dropdown
     */
    rowsDropdownLabel: string;
    /**
     * Sets the selection Mode, it's either single, multiple
     */
    selectionMode?: "single" | "multiple";
    /**
     * the selected product state
     */
    selection?: ISTableData;
    /**
     * handle selection change
     */
    onSelectionChange?: (value: ISTableData) => void;
    /**
     * Element used as table footer.
     */
    footer?: ReactNode;
    /**
     * Enables table scrolling.
     */
    scrollable?: boolean;
    /**
     * Sets height of scrollable table area(e.g. 200px).
     */
    scrollHeight?: string;
    /**
     * Object with custom functions returning editor components.
     */
    customEditors?: ISTableCustomEditor;
    /**
     * Function called when editing on cell is initialized
     */
    onCellEditInit?: ColumnProps["onEditorInit"];
    /**
     * Function called when editing on cell is submitted
     */
    onCellEditSubmit?: ColumnProps["onEditorSubmit"];
    /**
     * Custom class to apply on table element.
     */
    tableClassName?: string;
    /**
     * Expanded row are saved here. Use state.
     */
    expandedRows?: DataTableProps["expandedRows"];
    /**
     * Expands/collapse selected row.
     */
    onRowToggle?: DataTableProps["onRowToggle"];
    /**
     * Callback function when row is expanded.
     */
    onRowExpand?: DataTableProps["onRowExpand"];
    /**
     * Callback function when row is collapsed.
     */
    onRowCollapse?: DataTableProps["onRowCollapse"];
    /**
     * Function that return react node to be rendered as row expansion content.
     */
    rowExpansionTemplate?: DataTableProps["rowExpansionTemplate"];
}

export interface IEditorColumnProps extends ColumnProps {
    rowData: ISTableData;
    rowIndex: number;
    value: ISTableData[];
}
export interface ISTableColumn {
    field: string;
    header: string | ReactNode;
    template: {
        custom: boolean;
        type: string;
    };
    filter?: ITableColumnFilter;
    sortable: boolean;
    columnWidth?: string;
    additionalProps?: ISTableColumnAdditionalProps;
    className?: string;
    editor?: {
        enabled: boolean;
        type: string;
    };
    expander?: boolean;
    colSpan?: number;
}

export interface ISTableFilter {
    name: string;
    value: string | string[] | number | Date;
    filtering: string;
    dataType: string;
}

export interface ISTableCustomTemplate {
    [key: string]: (rowData: ISTableData, fieldName: string, header: string, additionalProps?: ISTableColumnAdditionalProps) => ReactNode;
}

export interface ISTableCustomEditor {
    [key: string]: (columnProps: IEditorColumnProps) => ReactNode;
}
export interface ISTableColumnAdditionalProps {
    [key: string]: string | number;
}

export interface ITableColumnFilter {
    active: boolean;
    type: string;
    filtering?: ColumnProps["filterMatchMode"];
    placeholder: string;
    dataType: "string" | "string[]" | "number" | "Date";
    dateAsMoment?: boolean;
    filterFunction?: string;
    dropdownOptions?: ISDropdownOption[] | ISDropdownOptionGrouped[];
    customLabelTemplate?: (option: ISDropdownOption) => ReactNode;
    itemsTemplate?: (option: ISDropdownOption) => ReactNode;
    selectedItemTemplate?: (option: ISDropdownOption[] | ISDropdownOptionGrouped[]) => ReactNode;
}

export interface ISTableData {
    [key: string]: string | number | undefined | boolean | ISTableData[];
}

export interface ISTableSortEvent {
    sortField: string;
    sortOrder?: DataTableProps["sortOrder"];
    multiSortMeta: unknown;
}

export interface ISTableFilterEvent {
    filters: unknown;
}

export interface ISTablePageEvent {
    first: number;
    rows: number;
}

export interface ISTableLazyParams {
    first?: number;
    rows?: number;
    page?: number;
    filters?: any;
    sortField?: string;
    sortOrder?: DataTableProps["sortOrder"];
}
