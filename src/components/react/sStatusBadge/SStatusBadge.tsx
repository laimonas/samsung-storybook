import React from "react";

export type StatusBadgeColor = "green" | "light-gray" | "dark-gray" | "orange" | "sky-blue" | "teal";
interface ISStatusBadgeProps {
    /**
     * Text to be displayed.
     */
    text: React.ReactNode;
    /**
     * Built in color options for text and border.
     */
    colorName?: StatusBadgeColor;
    /**
     * Custom color value (hex or rgb codes) to be used instead of built in ones.
     */
    customColor?: string;
}

const SStatusBadge: React.FunctionComponent<ISStatusBadgeProps> = ({ text, colorName, customColor }) => (
    <div
        className={`s-status-badge ${colorName ? `s-status-badge--${colorName}` : ""}`}
        style={{ color: customColor, borderColor: customColor }}
    >
        <span>{text}</span>
    </div>
);

export default SStatusBadge;
