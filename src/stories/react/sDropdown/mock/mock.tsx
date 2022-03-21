import React from "react";

import { IItem, SStatusBadge } from "../../../../components";
import { StatusBadgeColor } from "../../../../components/react/sStatusBadge/SStatusBadge";

export const fruits: IItem[] = [
    { id: "1", label: "Banana" },
    { id: "2", label: "Apple" },
];

export const badges: IItem[] = [
    { label: "Dark Gray Status", id: "dark-gray" },
    { label: "Orange Status", id: "orange" },
    { label: "Green Status", id: "green" },
    { label: "Light Gray Status", id: "light-gray" },
    { label: "Sky Blue Status", id: "sky-blue" },
    { label: "Teal Status", id: "teal" },
];

export const labelTemplate = (item: IItem) => {
    return <SStatusBadge text={item.label} colorName={item.id as StatusBadgeColor} />;
};
