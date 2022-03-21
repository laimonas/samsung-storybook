import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import classNames from "classnames";
import { FormControl, FormHelperText, InputLabel } from "@material-ui/core";

import { IItem } from "./models";
import { OpenDown16px } from "../../../resources";

export interface ISDropdown {
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * Default text shown as a placeholder
     */
    defaultTextForSelect?: string;
    /**
     * Dropdown items
     */
    items: IItem[];
    /**
     * Text used as label/placeholder.
     */
    label?: string;
    /**
     * Shows underline.
     */
    underline?: boolean;
    /**
     * Displays additional text below the input.
     */
    helperText?: string;
    /**
     * Disables the input.
     */
    disabled?: boolean;
    /**
     * Marks label with * icon if true.
     */
    required?: boolean;
    /**
     * Marks underline and error message text color with red.
     */
    error?: boolean;
    /**
     * Function that renders custom component as label. Takes item as argument.
     */
    customLabelTemplate?: (item: IItem) => React.ReactNode;
    /**
     * Handles the dropdown change use setState
     */
    setDropdownValue?: (value: string) => void;
    /**
     * Provide the current value use state
     */
    value?: React.ReactNode;
    /**
     * Provide optional icon
     */
    icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    /**
     * Provide optional value to disable the dropdown scroll locking the page
     */
    disableScrollLock?: boolean;
}
export const SDropdown: React.FunctionComponent<ISDropdown> = ({
    className,
    defaultTextForSelect,
    items,
    label,
    underline,
    helperText,
    disabled,
    required,
    error,
    customLabelTemplate,
    setDropdownValue,
    value,
    icon,
    disableScrollLock,
}) => {
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setDropdownValue && setDropdownValue(event.target.value as string);
    };

    return (
        <FormControl className={`${underline ? "s-dropdown-underline" : "s-dropdown-no-underline"}`} required={required} error={error}>
            {label && (
                <InputLabel id="dropdown-select-label" className="s-dropdown-label">
                    {label}
                </InputLabel>
            )}
            <Select
                labelId="dropdown-select-label"
                id="dropdown-select"
                value={value ?? ""}
                displayEmpty
                disabled={disabled}
                onChange={handleChange}
                className={classNames("dropdown-select v2", className)}
                IconComponent={(props) => {
                    if (icon) {
                        const Icon = icon;
                        return <Icon {...props} />;
                    }
                    return <OpenDown16px {...props} />;
                }}
                MenuProps={{
                    disableScrollLock: disableScrollLock,
                }}
            >
                {defaultTextForSelect && !label && <MenuItem value={""}>{defaultTextForSelect}</MenuItem>}
                {items?.map((item) => {
                    return (
                        <MenuItem key={[item.id, item.label].join("_")} value={item.id}>
                            {customLabelTemplate && typeof customLabelTemplate === "function" ? customLabelTemplate(item) : item.label}
                        </MenuItem>
                    );
                })}
            </Select>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};
