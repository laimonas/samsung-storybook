import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
import moment, { isMoment, Moment } from "moment";
import { Column, ColumnProps } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { ReactNode, Ref, useRef } from "react";

import { Breakpoint, BreakpointType, FormatTableDate, TableFilterFunctions, TableFilterType, TableTemplateType } from "../../../constants";
import { includeMediaBreakpoint } from "../../../utils/breakpoint";
import SDateFilter from "../sDateFilter/SDateFilter";
import { SDropdownFilter } from "../sDropdownFilter";
import SIcon from "../sIcon/SIcon";
import { OnOptionSelectFunction } from "../sMultiselect/models";
import SMultiselect from "../sMultiselect/SMultiselect";
import { getPaginationTemplate } from "../sPagination/SPaginationTemplate/SPaginationTemplate";
import SSearchInputFilter from "../sSearchInputFilter/SSearchInputFilter";
import SSpinner from "../sSpinner/SSpinner";
import {
    IEditorColumnProps,
    ISTable,
    ISTableColumn,
    ISTableColumnAdditionalProps,
    ISTableCustomEditor,
    ISTableCustomTemplate,
    ISTableData,
    ISTableFilter,
    ISTableFilterEvent,
    ISTableLazyParams,
    ISTablePageEvent,
    ISTableSortEvent,
    ITableColumnFilter,
} from "./models";
import "moment/locale/de";

export const STable: React.FunctionComponent<ISTable> = ({
    showReport = true,
    showRowsPerPage = true,
    data,
    columns,
    rows = 10,
    rowsPerPageOptions = [10, 20, 50],
    className,
    locale = "de",
    customTemplates,
    searchFilters,
    setSearchFilters,
    lazyParams,
    setLazyParams,
    totalRecords,
    lazyLoad = false,
    showPagination = true,
    loading = false,
    rowsDropdownLabel,
    selectionMode,
    selection,
    onSelectionChange,
    footer,
    scrollable,
    scrollHeight,
    customEditors,
    onCellEditInit,
    onCellEditSubmit,
    tableClassName,
    expandedRows,
    onRowToggle,
    onRowExpand,
    onRowCollapse,
    rowExpansionTemplate,
}) => {
    const dt: Ref<DataTable> = useRef(null);
    const desktop = useMediaQuery(includeMediaBreakpoint(BreakpointType.min, Breakpoint.lg));

    const downloadBodyTemplate = (rowData: ISTableData, fieldName: string) => {
        return (
            <div className="text-center">
                <a href={`${rowData[fieldName]}`} download>
                    <SIcon xlinkHref="/images/icons/16px/Download16px.svg#download16px-a" className="medium black" />
                </a>
            </div>
        );
    };

    const textBodyTemplate = (rowData: ISTableData, fieldName: string, header: string): ReactNode => {
        return (
            <>
                <span className="p-column-title">{header}</span>
                {fieldName in rowData && <span className="p-column-text">{rowData[fieldName]}</span>}
            </>
        );
    };

    const textDateTemplate = (rowData: ISTableData, fieldName: string, header: string): ReactNode => {
        return (
            <>
                <span className="p-column-title">{header}</span>
                {fieldName in rowData && (
                    <span className="p-column-text">
                        {(rowData[fieldName] as string)?.length && moment(rowData[fieldName] as string).format(FormatTableDate.TABLE_BODY)}
                    </span>
                )}
            </>
        );
    };

    const imageBodyTemplate = (rowData: ISTableData, fieldName: string, header: string, additionalProps?: ISTableColumnAdditionalProps) => {
        return (
            <>
                <span className="p-column-title">{header}</span>
                {fieldName in rowData && (
                    <img
                        className="p-column-img"
                        style={{ width: `${additionalProps?.imageWidth}` }}
                        src={`${rowData[fieldName]}`}
                        alt={rowData[fieldName] as string}
                    />
                )}
            </>
        );
    };

    const getBodyTemplate = (
        rowData: ISTableData,
        fieldName: string,
        header: string,
        templateType: string,
        additionalProps?: ISTableColumnAdditionalProps
    ): ReactNode => {
        switch (templateType) {
            case TableTemplateType.DATE:
                return textDateTemplate(rowData, fieldName, header);
            case TableTemplateType.TEXT:
                return textBodyTemplate(rowData, fieldName, header);
            case TableTemplateType.DOWNLOAD:
                return downloadBodyTemplate(rowData, fieldName);
            case TableTemplateType.IMAGE:
                return imageBodyTemplate(rowData, fieldName, header, additionalProps);
            default:
                return null;
        }
    };

    const getCustomBodyTemplate = (
        rowData: ISTableData,
        fieldName: string,
        header: string,
        templateType: string,
        template?: ISTableCustomTemplate,
        additionalProps?: ISTableColumnAdditionalProps
    ): ReactNode => {
        return template && template[templateType] && template[templateType](rowData, fieldName, header, additionalProps);
    };

    const getCustomEditor = (props: IEditorColumnProps, editorType: string, customEditors?: ISTableCustomEditor): ReactNode =>
        customEditors && customEditors[editorType] && customEditors[editorType](props);

    const getFilterType = (
        filter: ITableColumnFilter,
        index: number,
        fieldName: string,
        locale?: string,
    ): Object | undefined => {
        const searchValue: string | Date = searchFilters && searchFilters.length ? (searchFilters[index]?.value as string) : "";

        switch (filter?.type) {
            case TableFilterType.INPUT:
                return (
                    <SSearchInputFilter
                        searchValue={searchValue}
                        onTableSearchChange={onUpdateFilter}
                        placeholder={filter.placeholder}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dataType={filter.dataType}
                        tableFilter={true}
                    />
                );
            case TableFilterType.DROPDOWN:
                return (
                    <SDropdownFilter
                        options={filter.dropdownOptions!}
                        customLabelTemplate={filter.customLabelTemplate}
                        grouped
                        dropdownValue={searchValue}
                        placeholder={filter.placeholder}
                        onChangeDropdownValue={onUpdateFilter}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dataType={filter.dataType}
                        showClear={searchValue ? true : false}
                    />
                );
            case TableFilterType.DROPDOWN_GROUPED:
                return (
                    <SDropdownFilter
                        options={filter.dropdownOptions!}
                        customLabelTemplate={filter.customLabelTemplate}
                        grouped
                        dropdownValue={searchValue}
                        placeholder={filter.placeholder}
                        onChangeDropdownValue={onUpdateFilter}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dataType={filter.dataType}
                        optionGroupLabel="label"
                        optionGroupChildren="items"
                        showClear={searchValue ? true : false}
                    />
                );
            case TableFilterType.DATE:
                return (
                    <SDateFilter
                        selectedDate={searchValue}
                        locale={locale}
                        placeholder={filter.placeholder}
                        onDateChange={onUpdateFilter}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dateFormat={FormatTableDate.FILTER}
                        dataType={filter.dataType}
                        dateAsMoment={filter.dateAsMoment}
                    />
                );
            case TableFilterType.MULTISELECT:
                const multiSelected =
                    searchFilters && searchFilters?.length > 0 ? ((searchFilters[index]?.value as ISTableFilter["value"]) as string[]) : [];
                return (
                    <SMultiselect
                        options={filter.dropdownOptions!}
                        selectedOptions={multiSelected}
                        showClear={multiSelected && multiSelected.length > 0}
                        placeholder={filter.placeholder}
                        selectedItemsTemplate={filter.selectedItemTemplate}
                        itemsTemplate={filter.itemsTemplate}
                        filter
                        selectedItemsLabel="Element(e) ausgewählt"
                        tableFilteringProps={{
                            tableFilterMatchMode: filter.filtering,
                            tableFilterIndex: index,
                            tableFieldName: fieldName,
                            dataType: filter.dataType,
                            onOptionSelect: onUpdateFilter as OnOptionSelectFunction,
                        }}
                    />
                );
            default:
                return undefined;
        }
    };

    const filterBoolean = (value: boolean, filter: boolean): boolean => {
        return value === filter;
    };

    const filterPrice = (value: string, filter: string): string | null => {
        filter = filter.replace(",", ".");
        return value.toString().indexOf(filter) !== -1 ? value : null;
    };

    const filterDate = (value: string, filter: string | Date): boolean => {
        if (filter === undefined || filter === null || (typeof filter === "string" && filter.trim() === "")) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    };

    const formatDate = (date: Moment | Date | string): string => {
        if (isMoment(date)) return date.format(FormatTableDate.FILTER_OUTPUT);

        return moment(date).format(FormatTableDate.FILTER_OUTPUT);
    };

    const getFilterFunction = (value: string | boolean, filter: string | boolean, functionType: string): ReactNode => {
        switch (functionType) {
            case TableFilterFunctions.DATE:
                return filterDate(value as string, filter as string);
            case TableFilterFunctions.PRICE:
                return filterPrice(value as string, filter as string);
            case TableFilterFunctions.BOOLEAN:
                return filterBoolean(value as boolean, filter as boolean);
            default:
                return null;
        }
    };

    const onUpdateFilter = (
        e: any,
        fieldName: string,
        index: number,
        dataType: string,
        filtering?: ColumnProps["filterMatchMode"],
        clear?: boolean
    ) => {
        const value = clear ? "" : e.target.value;
        filtering && dt?.current?.filter(value, fieldName, filtering);

        if (searchFilters && filtering) {
            let currentSearchFilters: ISTableFilter[] = [...searchFilters];

            currentSearchFilters[index] = { value: value, name: fieldName, filtering: filtering, dataType: dataType };

            if (typeof setSearchFilters === "function") {
                setSearchFilters(currentSearchFilters);
            }
        }
    };

    // Custom Events for LazyLoad

    const onPage = (event: ISTablePageEvent) => {
        const _lazyParams: ISTableLazyParams = { ...lazyParams, ...event };
        setLazyParams && setLazyParams(_lazyParams);
    };

    const onSort = (event: ISTableSortEvent) => {
        const _lazyParams: ISTableLazyParams = { ...lazyParams, ...event };
        setLazyParams && setLazyParams(_lazyParams);
    };

    const onFilter = (event: ISTableFilterEvent) => {
        let _lazyParams: ISTableLazyParams = { ...lazyParams, ...event };
        _lazyParams.first = 0;
        setLazyParams && setLazyParams(_lazyParams);
    };

    if (!columns || !data) {
        return <SSpinner animation={"border"} variant={"secondary"} />;
    }

    return (
        <div className={classNames("datatable-responsive", className)}>
            <div className="card">
                <DataTable
                    ref={dt}
                    value={data}
                    className="p-datatable-responsive"
                    paginator={showPagination}
                    lazy={lazyLoad}
                    first={lazyParams?.first}
                    rows={lazyParams?.rows ?? rows}
                    totalRecords={totalRecords}
                    onPage={lazyParams && onPage}
                    paginatorClassName="SPagination"
                    paginatorTemplate={getPaginationTemplate({ showReport, showRowsPerPage, rowsPerPageOptions, rowsDropdownLabel })}
                    onSort={lazyLoad ? onSort : undefined}
                    sortField={lazyParams?.sortField}
                    sortOrder={lazyParams?.sortOrder}
                    onFilter={lazyLoad ? onFilter : undefined}
                    filters={lazyParams?.filters}
                    currentPageReportTemplate={!lazyLoad ? "{first} bis {last} von {totalRecords}" : undefined}
                    rowsPerPageOptions={rowsPerPageOptions}
                    loading={loading}
                    selectionMode={selectionMode}
                    selection={selection}
                    onSelectionChange={onSelectionChange}
                    footer={footer}
                    scrollable={scrollable}
                    scrollHeight={scrollHeight}
                    tableClassName={tableClassName}
                    expandedRows={expandedRows}
                    onRowToggle={onRowToggle}
                    onRowExpand={onRowExpand}
                    onRowCollapse={onRowCollapse}
                    rowExpansionTemplate={rowExpansionTemplate}
                >
                    {columns.map((column: ISTableColumn, index) => {
                        return column.expander ? (
                            <Column expander key={index} className={column.className} />
                        ) : (
                            <Column
                                style={{ width: `${desktop && column?.columnWidth}` }}
                                key={index}
                                field={column.field}
                                header={column.header}
                                body={(rowData: ISTableData) =>
                                    column.template.custom
                                        ? getCustomBodyTemplate(
                                              rowData,
                                              column.field,
                                              column.header as string,
                                              column.template.type,
                                              customTemplates,
                                              column?.additionalProps
                                          )
                                        : getBodyTemplate(
                                              rowData,
                                              column.field,
                                              column.header as string,
                                              column.template.type,
                                              column?.additionalProps
                                          )
                                }
                                filter={column?.filter?.active}
                                filterElement={column?.filter && getFilterType(column.filter, index, column.field, locale)}
                                filterFunction={(value: string, filter: string) =>
                                    column.filter?.filterFunction && getFilterFunction(value, filter, column.filter.filterFunction)
                                }
                                sortable={column.sortable}
                                editor={
                                    column.editor && column.editor.enabled
                                        ? (columnProps: IEditorColumnProps) =>
                                              getCustomEditor(columnProps, column.editor?.type as string, customEditors)
                                        : undefined
                                }
                                onEditorInit={onCellEditInit}
                                onEditorSubmit={onCellEditSubmit}
                                colSpan={column.colSpan}
                                className={column.className}
                            />
                        );
                    })}
                </DataTable>
            </div>
        </div>
    );
};
