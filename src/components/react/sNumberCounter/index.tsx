import React from "react";
import classNames from "classnames";

import SIcon from "../sIcon/SIcon";
import { SIconSize } from "../../../utils";

export interface ISNumberCounterProps {
    className?: string;
    disabled?: boolean;
    /**
     * define minimum value that can be used
     */
    min?: number;
    /**
     * define maximum value that can be used
     */
    max?: number;
    value: number;
    onSetValue: (value: number) => void;
    /**
     * whether use minimal or standard design
     */
    minimal?: boolean;
}

export const SNumberCounter: React.FunctionComponent<ISNumberCounterProps> = ({
    className,
    disabled,
    min,
    max,
    value,
    onSetValue,
    minimal,
}) => {
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => event.target.select();
    const handleDecrease = (val: number) => {
        if (min) {
            val >= min && onSetValue(val);
        } else {
            onSetValue(val);
        }
    };
    const handleIncrease = (val: number) => {
        if (max) {
            val <= max && onSetValue(val);
        } else {
            onSetValue(val);
        }
    };
    const handleInputChange = (val: number) => {
        if (min && val >= min && max && val <= max) {
            onSetValue(val);
            return;
        }
        min && !max && handleDecrease(val);
        max && !min && handleIncrease(val);
        !max && !min && onSetValue(val);
    };

    return (
        <div className={classNames("s-number-counter", { minimal: minimal }, className)}>
            <button className="s-number-counter__btn reduce-btn" onClick={() => handleDecrease(value - 1)} disabled={disabled}>
                <SIcon iconName="minus" iconSize={SIconSize.Small} className="black" />
            </button>
            <input
                type="number"
                value={value}
                disabled={disabled}
                min={min}
                max={max}
                onChange={(e) => handleInputChange(Number(e.target.value))}
                onFocus={(e) => handleFocus(e)}
            />
            <button className="s-number-counter__btn increase-btn" onClick={() => handleIncrease(value + 1)} disabled={disabled}>
                <SIcon iconName="plus" iconSize={SIconSize.Small} className="black" />
            </button>
        </div>
    );
};
