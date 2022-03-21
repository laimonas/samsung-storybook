import React, { useEffect, useRef, useState } from "react";
import { Input } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { ThemeProvider } from "@material-ui/core/styles";

import STooltip from "./components/sTooltip/STooltip";
import SButton from "../sButton/SButton";
import OpenDown16px from "../../../resources/icons/16px/OpenDown16px";
import Delete16px from "../../../resources/icons/16px/Delete16px";
import Edit16px from "../../../resources/icons/16px/Edit16px";
import Forward16px from "../../../resources/icons/16px/Forward16px";
import { generateInputStyles, generateLabelStyles, generateSelectStyles, propertyFieldTheme } from "./styles";
import { IItem } from "../sDropdown/models";

export type TextInputColor = "green" | "red";
interface ISPropertyFieldProps {
    /**
     * Name used for "name" html attribute on input
     */
    name: string;
    /**
     * Value for the animated label.
     */
    label: string;
    /**
     * Adds asterisk (*) to the label right side.
     */
    required?: boolean;
    /**
     * Text to be displayed below the field (error messages etc.).
     */
    helperText?: string;
    /**
     * If true marks label and underline with red color.
     */
    error?: boolean;
    /**
     * Value for of the property field.
     */
    value: string;
    /**
     * Disables the property field.
     */
    disabled?: boolean;
    /**
     * If true the property field will be editable and "pen" icon will be shown.
     */
    editable?: boolean;
    /**
     * If true text is rendered in multiple lines.
     */
    multiline?: boolean;
    /**
     * Sets number of rows for input in case multiline is true.
     */
    rows?: number;
    /**
     * Sets maximum number of rows for input in case multiline is true.
     */
    rowsMax?: number;
    /**
     * Dropdown items
     */
    items?: IItem[];
    /**
     * Content to be displayed in tooltip popover
     */
    tooltipContent?: React.ReactNode;
    /**
     * Class for tooltip
     */
    tooltipClassName?: string;
    /**
     * Set color for input text. "green" or "red"
     */
    inputTextColor?: TextInputColor;
    /**
     * State function for value saving.
     */
    setValue: (value: string) => void;
    /**
     * State function for changing error value.
     */
    setError?: (value: boolean) => void;
    /**
     * Custom function used to render components instead of text(badges).
     */
    customLabelTemplate?: (item: IItem) => React.ReactNode;
}

const SPropertyField: React.FunctionComponent<ISPropertyFieldProps> = ({
    name,
    label,
    required,
    helperText,
    error,
    value,
    disabled,
    editable,
    multiline,
    rows,
    rowsMax,
    tooltipContent,
    tooltipClassName,
    inputTextColor,
    items,
    setValue,
    setError,
    customLabelTemplate,
}) => {
    const [newValue, setNewValue] = useState(value);
    const [editMode, setEditMode] = useState(false);
    const [focused, setFocused] = useState(false);
    const [unEditable, setUnEditable] = useState(true);
    const inputRef = useRef<HTMLInputElement>();

    const labelClasses = generateLabelStyles(newValue, error)();
    const inputClasses = generateInputStyles(editMode, focused, inputTextColor, disabled)();
    const selectClasses = generateSelectStyles()();

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const { target } = event;
        const { value } = target;

        validateRequired(value as string);
        setNewValue(value as string);
    };

    const validateRequired = (val: string) => {
        const newErrorValue = (!val || val.length === 0) && (required as boolean);
        setError && setError(newErrorValue);
    };

    const focus = () => {
        setFocused(true);
        inputRef?.current?.select();
    };

    const blur = () => {
        inputRef?.current?.blur();
        setFocused(false);
    };

    const edit = () => {
        setEditMode(true);
        setUnEditable(false);
    };

    const save = () => {
        blur();
        setEditMode(false);
        setValue(newValue);
    };

    const discard = () => {
        blur();
        validateRequired(value);
        setNewValue(value);
        setEditMode(false);
    };

    const handleKeyboardEvents = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            if ((!newValue || newValue.length === 0) && required) {
                return;
            } else if (!multiline) {
                save();
            }
        }
        if (e.key === "Escape") discard();
    };

    useEffect(() => {
        if (editMode) focus();
        if (!editMode) setUnEditable(true);
    }, [editMode]);

    useEffect(() => {
        setNewValue(value);
    }, [value]);

    return (
        <div className={`s-property-field`}>
            <ThemeProvider theme={propertyFieldTheme}>
                <FormControl error={error} disabled={disabled} required={required} className="w-100">
                    <InputLabel
                        id={`${name}-property-field-label`}
                        htmlFor={`${name}-property-field`}
                        classes={{ ...labelClasses }}
                        className="s-property-field__tooltip-container"
                    >
                        {label}
                        {tooltipContent && value && <STooltip content={tooltipContent} tooltipClassName={tooltipClassName} />}
                    </InputLabel>

                    {!items && (
                        <Input
                            inputRef={inputRef}
                            id={`${name}-property-field`}
                            name={name}
                            classes={{ ...inputClasses }}
                            value={newValue}
                            onChange={handleChange}
                            disableUnderline={!focused || disabled}
                            onFocus={focus}
                            onBlur={() => setFocused(false)}
                            onKeyUp={handleKeyboardEvents}
                            disabled={unEditable}
                            multiline={multiline}
                            rows={rows}
                            rowsMax={rowsMax}
                        />
                    )}

                    {items && (
                        <Select
                            id={`${name}-property-field`}
                            name={name}
                            IconComponent={(props) => <OpenDown16px {...props} />}
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                },
                                getContentAnchorEl: null,
                            }}
                            onChange={handleChange}
                            classes={{ ...selectClasses }}
                            disableUnderline={!focused || disabled}
                            onOpen={focus}
                            onClose={() => {
                                blur();
                                validateRequired(newValue as string);
                            }}
                            defaultValue={value}
                        >
                            {items?.map((item) => (
                                <MenuItem key={[item.id, item.label].join("-")} value={item.id}>
                                    {customLabelTemplate && typeof customLabelTemplate === "function"
                                        ? customLabelTemplate(item)
                                        : item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}

                    <FormHelperText id="property-helper-text">{helperText}</FormHelperText>

                    {!items && editMode && (
                        <div
                            className={` ${
                                helperText ? "s-property-field__edit-actions--with-helper-text" : "s-property-field__edit-actions"
                            }`}
                        >
                            <SButton
                                className="btn-icon medium mr2"
                                onClick={save}
                                disabled={(required && (!newValue || newValue.length === 0)) || error}
                            >
                                <Forward16px />
                            </SButton>
                            <SButton className="btn-icon medium" onClick={discard}>
                                <Delete16px />
                            </SButton>
                        </div>
                    )}

                    {!items && editable && !editMode && (
                        <div className="s-property-field__edit">
                            <SButton className="btn-icon medium" onClick={edit} disabled={disabled}>
                                <Edit16px />
                            </SButton>
                        </div>
                    )}
                </FormControl>
            </ThemeProvider>
        </div>
    );
};

export default SPropertyField;
