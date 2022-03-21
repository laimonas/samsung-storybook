// Media Queries

export enum Breakpoint {
    sm = 568,
    md = 768,
    lg = 992,
    xl = 1200,
    xxl = 1440,
}

export enum BreakpointType {
    max = "max",
    min = "min",
}

export enum TableFilterType {
    INPUT = "input",
    DROPDOWN = "dropdown",
    DROPDOWN_GROUPED = "dropdown_grouped",
    DATE = "date",
    MULTISELECT = "multiselect",
}

export enum TableFilterFunctions {
    DATE = "filterDate",
    PRICE = "filterPrice",
    BOOLEAN = "filterBoolean",
}

export enum TableTemplateType {
    TEXT = "textBodyTemplate",
    DATE = "textDateTemplate",
    DOWNLOAD = "textDownloadTemplate",
    IMAGE = "imageBodyTemplate",
}

export enum FormatTableDate {
    FILTER = "dd.mm.yy",
    TABLE_BODY = "DD.MM.YYYY",
    FILTER_OUTPUT = "YYYY-MM-DD"
}

export enum LocalesDate {
    DE = "de",
}

export enum LocalesNumberFormat {
    DE = "de-DE",
}

export enum Currencies {
    DE = "EUR",
}

export enum NumberFormatStyle {
    CURRENCY = "currency",
}
