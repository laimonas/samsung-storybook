import { ISTableColumn } from "../../../../components";

export const expanderColumns: ISTableColumn[] = [
    {
        field: "id",
        header: "",
        template: {
            custom: true,
            type: "expandTriggerTemplate",
        },
        sortable: false,
        expander: true,
    },
    {
        field: "image",
        header: "Vorschau",
        template: {
            custom: true,
            type: "customImageTemplate",
        },
        sortable: false,
    },
    {
        field: "name",
        header: "Bezeichnung",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        sortable: true,
    },
    {
        field: "code",
        header: "Modell(e) & Variante(n)",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "contains",
            dataType: "string",
        },
        sortable: true,
    },
    {
        field: "category",
        header: "Kategory",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        filter: {
            active: true,
            type: "dropdown",
            placeholder: "Alle",
            filtering: "equals",
            dataType: "string",
            dropdownOptions: [
                { label: "Accessories", value: "Accessories" },
                { label: "Clothing", value: "Clothing" },
                { label: "Electronics", value: "Electronics" },
                { label: "Fitness", value: "Fitness" },
            ],
        },
        sortable: true,
    },
    {
        field: "price",
        header: "Summe",
        template: {
            custom: true,
            type: "customPriceTemplate",
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "custom",
            dataType: "number",
            filterFunction: "filterPrice",
        },
        sortable: true,
        additionalProps: {
            data: " (demo)",
        },
    },
    {
        field: "quantity",
        header: "Menge",
        template: {
            custom: false,
            type: "textBodyTemplate",
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "custom",
            dataType: "number",
            filterFunction: "filterPrice",
        },
        sortable: true,
    },
];
