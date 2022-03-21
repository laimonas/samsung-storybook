import { ReactNode } from "react";

export interface SPaginationPageLink {
    onClick: () => void;
    className: string;
    iconClassName: string;
    disabled: boolean;
    element: ReactNode;
    value: string;
    onChange: () => void;
}

export interface SPaginationRowsPerPage {
    className: string;
    value: string;
    onChange: () => void;
    currentPage: string;
    totalPages: string;
    totalRecords: string;
    element: ReactNode;
    props: unknown;
}

export interface SPaginationCurrentReport extends SPaginationRowsPerPage {
    first: number;
    rows: number;
    last: number;
}

export interface ISPaginationTemplate {
    layout: string;
    RowsPerPageDropdown: (options: SPaginationRowsPerPage) => ReactNode;
    FirstPageLink: (options: SPaginationPageLink) => ReactNode;
    PrevPageLink: (options: SPaginationPageLink) => ReactNode;
    NextPageLink: (options: SPaginationPageLink) => ReactNode;
    LastPageLink: (options: SPaginationPageLink) => ReactNode;
    CurrentPageReport?: (options: SPaginationCurrentReport) => ReactNode;
}

export interface ISDropdownOption {
    label: string | ReactNode;
    value: string | boolean;
}

export interface ISDropdownOptionGrouped {
    label: ReactNode;
    code: string;
    items: ISDropdownOption[];
}
