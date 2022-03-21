import React from "react";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";

interface ISInputField {
    /**
     * Provide additional classes
     */
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    /**
     * Helper Text below input field
     */
    error?: boolean;
    helperText?: string;
    /**
     * Placeholder
     */
    label?: string;
    required?: boolean;
    value?: string;
    multiLine?: boolean;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * Standard browser autoComplete
     */
    autoComplete?: "on" | "off";
    /**
     * Id of the Textfield
     */
    id?: string;
    /**
     * Available HTML input types
     */
    type?: "text" | "number" | "date" | "datetime-local" | "password" | "email";
    inputRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * function executed on blur event
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * function executed on focus event
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const SInputField: React.FunctionComponent<ISInputField> = ({
    className,
    disabled,
    helperText,
    label,
    required,
    error,
    defaultValue,
    value,
    onChange,
    multiLine,
    id,
    type,
    autoComplete,
    inputRef,
    onBlur,
    onFocus
}) => {
    return (
        <div className={classNames("input-field v2", className)}>
            <TextField
                autoComplete={autoComplete}
                error={error}
                required={required}
                disabled={disabled}
                id={id}
                label={label}
                helperText={helperText}
                value={value}
                defaultValue={defaultValue ?? ""}
                multiline={multiLine}
                onChange={onChange}
                type={type}
                inputRef={inputRef}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </div>
    );
};

SInputField.defaultProps = {
    multiLine: false,
    type: "text",
    autoComplete: "on",
};

export default SInputField;
