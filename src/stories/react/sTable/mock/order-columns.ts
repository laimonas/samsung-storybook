import { ISTableColumn } from "../../../../components";

export const orderColumns: ISTableColumn[] = [
    {
        field: "customer",
        header: "Customer",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        sortable: false,
    },
    {
        field: "date",
        header: "Date",
        template: {
            custom: false,
            type: "textDateTemplate",
        },
        sortable: false,
    },
    {
        field: "amount",
        header: "Amount",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        sortable: false,
    },
    {
        field: "quantity",
        header: "Quantity",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        sortable: false,
    },
];
