import classNames from "classnames";
import moment, { Moment } from "moment";
import { addLocale } from "primereact/api";
import { Calendar, CalendarChangeParams } from "primereact/calendar";
import { ColumnProps } from "primereact/column";
import React from "react";

import { getCalenderFormat } from "../../../utils";

export interface IChangeParamsWithMoment<T = any> extends Omit<CalendarChangeParams, "target"> {
    target: {
        value: T | undefined | null;
    };
}
export interface ISDateFilter {
    className?: string;
    onDateChange: (
        dateChange: IChangeParamsWithMoment<Date | Date[] | Moment>,
        fieldName: ISDateFilter["fieldName"],
        filterIndex: ISDateFilter["filterIndex"],
        dataType: ISDateFilter["dataType"],
        filtering: ISDateFilter["filtering"]
    ) => void;
    selectedDate?: Date | Date[] | string;
    dateFormat: string;
    placeholder: string;
    fieldName: string;
    filterIndex: number;
    filtering: ColumnProps["filterMatchMode"];
    locale?: string;
    dataType: string;
    dateAsMoment?: boolean;
}

const SDateFilter: React.FunctionComponent<ISDateFilter> = ({
    className,
    selectedDate,
    onDateChange,
    dateFormat,
    placeholder,
    fieldName,
    filterIndex,
    filtering,
    locale,
    dataType,
    dateAsMoment,
}) => {
    if (locale) {
        addLocale(locale, getCalenderFormat(locale));
    }

    const handleDateChange = (inputEvent: IChangeParamsWithMoment): void => {
        const { target } = inputEvent;
        const { value } = target;
        const outputEvent: IChangeParamsWithMoment<Date | Moment> =
            dateAsMoment && value
                ? ({ ...inputEvent, target: { ...target, value: moment(value as Date) } } as IChangeParamsWithMoment<Moment>)
                : (inputEvent as IChangeParamsWithMoment<Date>);

        onDateChange(outputEvent, fieldName, filterIndex, dataType, filtering);
    };

    return (
        <div className={classNames("SDateFilter", className)}>
            <Calendar
                value={selectedDate as Date}
                onChange={handleDateChange}
                dateFormat={dateFormat}
                className="p-column-filter"
                placeholder={placeholder}
                showIcon
                icon={"pi pi-calendar"}
                locale={locale}
                showButtonBar
                clearButtonClassName={"btn-v2 btn-black"}
                todayButtonClassName={"btn-v2 btn-transparent"}
            />
        </div>
    );
};

export default SDateFilter;
