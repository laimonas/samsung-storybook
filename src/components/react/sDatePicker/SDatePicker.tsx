import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from "primereact/calendar";
import moment, { Moment } from "moment";
import { addLocale } from "primereact/api";
import { TextField } from "@material-ui/core";

import { getCalenderFormat } from "../../../utils";

type DateOutputType = "Date" | "Moment" | "string";
interface ISDatePickerProps {
    /**
     * Unique identifier of the calendar.
     */
    id: string;
    /**
     * Unique identifier of the input element.
     */
    inputId: string;
    /**
     * Value used for name field in event object.
     */
    name?: string;
    /**
     * Value used as label for input field.
     */
    label: string;
    /**
     * Adds asterisk(*) sign to the label.
     */
    required?: boolean;
    /**
     * Disable the date picker.
     */
    disabled?: boolean;
    /**
     * Value used as a text underneath the input's underline.
     */
    helperText?: string;
    /**
     * Used to display the values ​​of the locale object defined in the Locale API. e.g "en" or "de"
     */
    locale?: string;
    /**
     * Class used to style calendar panel.
     */
    calendarClassName?: string;
    /**
     * Class used to style input element.
     */
    inputClassName?: string;
    /**
     * Format used for display value in the input element.
     */
    dateDisplayFormat: string;
    /**
     * Output value types: "Date" or "Moment" or "string".  Default "Date".
     */
    dateOutputType?: DateOutputType;
    /**
     * Format used for output value in case that date output type is "string".
     */
    stringOutputFormat?: string;
    /**
     * Function that sets selected date. Use state.
     */
    onDateChange: (selectedDate: Date | Moment | string | null) => void;
}

const SDatePicker: React.FunctionComponent<ISDatePickerProps> = ({
    id,
    inputId,
    name,
    label,
    required,
    disabled,
    helperText,
    locale,
    calendarClassName,
    inputClassName,
    dateDisplayFormat,
    dateOutputType,
    stringOutputFormat,
    onDateChange,
}) => {
    const [displayValue, setDisplayValue] = useState<string>("");

    if (locale) {
        addLocale(locale, getCalenderFormat(locale));
    }

    const handleDateChange = (event: CalendarChangeParams): void => {
        const { target } = event;
        const { value } = target;

        onDateChange(setOutputValue(value as Date, dateOutputType));
        setDisplayValue(value ? moment(value as Date).format(dateDisplayFormat) : "");
    };

    const setOutputValue = (selectedValue: Date | null, type?: DateOutputType): Date | Moment | string | null => {
        let outputValue: Date | Moment | string | null = selectedValue;

        if (type === "Moment") outputValue = selectedValue ? moment(selectedValue) : selectedValue;
        if (type === "string") outputValue = selectedValue ? moment(selectedValue).format(stringOutputFormat) : selectedValue;

        return outputValue;
    };

    return (
        <div className="s-date-picker input-field v2">
            <TextField
                id={inputId}
                label={label}
                required={required}
                disabled={disabled}
                helperText={helperText && helperText}
                InputLabelProps={{ shrink: displayValue ? true : false }}
                InputProps={{ readOnly: true }}
                value={displayValue}
                className={inputClassName}
            />
            <Calendar
                id={id}
                name={name}
                disabled={disabled}
                onChange={handleDateChange}
                showIcon
                icon={"pi pi-calendar"}
                locale={locale}
                showButtonBar
                clearButtonClassName={"btn-v2 btn-black"}
                todayButtonClassName={"btn-v2 btn-transparent"}
                panelClassName={calendarClassName}
            />
        </div>
    );
};
export default SDatePicker;
