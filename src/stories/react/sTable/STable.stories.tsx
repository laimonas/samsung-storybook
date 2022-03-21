import { Story } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import { ISTableData, ISTableFilter, ISTableLazyParams, SDropdownMenu, SStarButton, STable } from "../../../components";
import Kebab16px from "../../../resources/icons/16px/Kebab16px";
import { numberFormatDe } from "../../../utils";
import { columns } from "./mock/columns";
import { columns_edit } from "./mock/columns_edit.tsx";
import { columnsLazy } from "./mock/columnsLazy";
import { columnsStar } from "./mock/columnsStar";
import { data } from "./mock/products.json";
import { productOrders } from "./mock/products-orders.json";
import { CustomerService } from "./service/customerService";
import { orderColumns } from "./mock/order-columns";
import { expanderColumns } from "./mock/expander-columns";

export default {
    title: "React/STable (PD)",
    component: STable,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof STable>;

const TemplateTable: Story<PropsType> = (args) => {
    const [searchFiltersState, setSearchFiltersState] = useState<ISTableFilter[]>([]);

    return <STable {...args} searchFilters={searchFiltersState} setSearchFilters={setSearchFiltersState} />;
};

export const Table = TemplateTable.bind({});

Table.args = {
    columns: columns,
    data: data,
    rowsDropdownLabel: "Anzeigen:",
    customTemplates: {
        customImageTemplate: (rowData, fieldName, header) => (
            <>
                <span className="p-column-title">{header}</span>
                <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
            </>
        ),
        customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
            <>
                <span className="p-column-title">{header}</span>
                <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                {additionalProps && <span>{additionalProps.data}</span>}
            </>
        ),
    },
};

const TemplateLazyTable: Story<PropsType> = (args) => {
    const [searchFiltersState, setSearchFiltersState] = useState<ISTableFilter[]>([]);

    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState<ISTableData[]>([]);
    const [lazyParams, setLazyParams] = useState<ISTableLazyParams>({
        first: 0,
        rows: 10,
        page: 1,
        sortOrder: 1,
        sortField: "date",
    });

    const customerService = new CustomerService();

    useEffect(() => {
        loadLazyData();
    }, [lazyParams]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        customerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then((data) => {
            setTotalRecords(data.totalRecords);
            setCustomers(data.customers);
        });
    };

    return (
        <Container className="container-xxl">
            <STable
                {...args}
                searchFilters={searchFiltersState}
                setSearchFilters={setSearchFiltersState}
                data={customers}
                totalRecords={totalRecords}
                lazyParams={lazyParams}
                setLazyParams={setLazyParams}
            />
        </Container>
    );
};

export const LazyTable = TemplateLazyTable.bind({});

LazyTable.args = {
    columns: columnsLazy,
    customTemplates: {
        customImageTemplate: (rowData, fieldName, header) => (
            <>
                <span className="p-column-title">{header}</span>
                <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
            </>
        ),
        customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
            <>
                <span className="p-column-title">{header}</span>
                <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                {additionalProps && <span>{additionalProps.data}</span>}
            </>
        ),
    },
    lazyLoad: true,
    rowsDropdownLabel: "Anzeigen:",
    loading: false,
};

const TemplateSelectableLazyTable: Story<PropsType> = (args) => {
    const [searchFiltersState, setSearchFiltersState] = useState<ISTableFilter[]>([]);

    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState<ISTableData[]>([]);
    const [selection, onSelectionChange] = useState<ISTableData>(null);
    const [lazyParams, setLazyParams] = useState<ISTableLazyParams>({
        first: 0,
        rows: 10,
        page: 1,
        sortOrder: 1,
        sortField: "date",
    });

    const customerService = new CustomerService();

    useEffect(() => {
        loadLazyData();
    }, [lazyParams]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        customerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then((data) => {
            setTotalRecords(data.totalRecords);
            setCustomers(data.customers);
        });
    };

    const changeSelection = (event) => {
        onSelectionChange(event.value);
    };

    return (
        <Container className="container-xxl">
            <STable
                {...args}
                searchFilters={searchFiltersState}
                setSearchFilters={setSearchFiltersState}
                data={customers}
                totalRecords={totalRecords}
                lazyParams={lazyParams}
                setLazyParams={setLazyParams}
                selection={selection}
                onSelectionChange={changeSelection}
            />
        </Container>
    );
};

export const SelectableLazyTable = TemplateSelectableLazyTable.bind({});
SelectableLazyTable.args = {
    columns: columnsLazy,
    customTemplates: {
        customImageTemplate: (rowData, fieldName, header) => (
            <>
                <span className="p-column-title">{header}</span>
                <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
            </>
        ),
        customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
            <>
                <span className="p-column-title">{header}</span>
                <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                {additionalProps && <span>{additionalProps.data}</span>}
            </>
        ),
    },
    lazyLoad: true,
    rowsDropdownLabel: "Anzeigen:",
    loading: false,
    selectionMode: "single",
};

const TemplateStarTable: Story<PropsType> = (args) => {
    const [tableData, setData] = useState<ISTableData[]>(
        data.map((row, index) => {
            return { ...row, star: Math.random() < 0.5, index };
        })
    );

    const updateRow = (rowData: ISTableData) => {
        tableData[rowData["index"] as string] = rowData;
        setData([...tableData]);
    };

    return (
        <Container className="container-xxl">
            <STable
                {...args}
                columns={columnsStar}
                data={tableData}
                customTemplates={{
                    customStarTemplate: (rowData: any, fieldName, header) => {
                        return (
                            <>
                                <span className="p-column-title">{header}</span>
                                <SStarButton
                                    onClick={() => {
                                        rowData[fieldName] = !rowData[fieldName];
                                        updateRow(rowData);
                                    }}
                                    isSelected={rowData[fieldName]}
                                ></SStarButton>
                            </>
                        );
                    },
                }}
            />
        </Container>
    );
};

export const StarTable = TemplateStarTable.bind({});

StarTable.args = {};

const TemplateTableEditable: Story<PropsType> = (args) => {
    const [searchFiltersState, setSearchFiltersState] = useState<ISTableFilter[]>([]);
    const [anchorEl, setAnchorEl] = useState<MenuProps["anchorEl"]>(null);

    const item1 = (
        <MenuItem key="key1" onClick={(event) => console.log("hello")}>
            <Typography variant="inherit" noWrap>
                <span className="font-body2 family-one">Hello!</span>
            </Typography>
        </MenuItem>
    );
    const item2 = (
        <MenuItem key="key2" onClick={(event) => console.log("Bye")}>
            <Typography variant="inherit" noWrap>
                <span className="font-body2 family-one">Bye!</span>
            </Typography>
        </MenuItem>
    );

    const items = [item1, item2];
    const ITEM_HEIGHT = 48;

    const paperStyleProps = {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            fill: "red",
        },
    };

    return (
        <STable
            {...args}
            searchFilters={searchFiltersState}
            setSearchFilters={setSearchFiltersState}
            customTemplates={{
                customImageTemplate: (rowData, fieldName, header) => (
                    <>
                        <span className="p-column-title">{header}</span>
                        <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
                    </>
                ),
                customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
                    <>
                        <span className="p-column-title">{header}</span>
                        <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                        {additionalProps && <span>{additionalProps.data}</span>}
                    </>
                ),
                customEditTemplate: () => (
                    <>
                        <SDropdownMenu
                            menuId="long-menu"
                            trigger={<Kebab16px />}
                            paperStyleProps={paperStyleProps}
                            items={items}
                            anchorEl={anchorEl}
                            setAnchorEl={setAnchorEl}
                        />
                    </>
                ),
            }}
        />
    );
};

export const TableEditable = TemplateTableEditable.bind({});

TableEditable.args = {
    columns: columns_edit,
    data: data,
    rowsDropdownLabel: "Anzeigen:",
};

const TemplateExpandableRows: Story<PropsType> = (args) => {
    const [expandedRows, setExpandedRows] = useState(null);

    const rowExpansionTemplate = (rowData) => {
        return (
            <div>
                <h5>Orders for {rowData.name}</h5>
                <STable
                    data={rowData.orders}
                    columns={orderColumns}
                    rowsDropdownLabel=""
                    showPagination={false}
                    className="expanded-table"
                />
            </div>
        );
    };

    return (
        <STable
            {...args}
            rowExpansionTemplate={rowExpansionTemplate}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            customTemplates={{
                customImageTemplate: (rowData, fieldName, header) => (
                    <>
                        <span className="p-column-title">{header}</span>
                        <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
                    </>
                ),
                customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
                    <>
                        <span className="p-column-title">{header}</span>
                        <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                        {additionalProps && <span>{additionalProps.data}</span>}
                    </>
                ),
            }}
        />
    );
};

export const ExpandableRows = TemplateExpandableRows.bind({});

ExpandableRows.args = {
    data: productOrders,
    columns: expanderColumns,
};
