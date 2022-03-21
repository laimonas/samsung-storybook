import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SMultiselect, SStatusBadge } from "../../../components";

const cities = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
];

const groupedCities = [
    {
        label: "Germany",
        code: "DE",
        items: [
            { label: "Berlin", value: "Berlin" },
            { label: "Frankfurt", value: "Frankfurt" },
            { label: "Hamburg", value: "Hamburg" },
            { label: "Munich", value: "Munich" },
        ],
    },
    {
        label: "USA",
        code: "US",
        items: [
            { label: "Chicago", value: "Chicago" },
            { label: "Los Angeles", value: "Los Angeles" },
            { label: "New York", value: "New York" },
            { label: "San Francisco", value: "San Francisco" },
        ],
    },
];

const badgeTemplate = (option) => {
    if (option) {
        return <SStatusBadge text={option} />;
    }
    return "Select City";
};
const badgeItemsTemplate = (option) => {
    return <SStatusBadge text={option.label} />;
};

export default {
    title: "React/SMultiselect",
    component: SMultiselect,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SMultiselect>;

const Template: Story<PropsType> = (args) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    return (
        <div style={{ width: "200px" }}>
            <SMultiselect {...args} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
        </div>
    );
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
    options: cities,
    placeholder: "Cities",
    filter: true,
    showClear: true,
    selectedItemsLabel: "Element(e) ausgewählt",
};

export const MultiSelectGrouped = Template.bind({});
MultiSelectGrouped.args = {
    options: groupedCities,
    placeholder: "Grouped cities",
    filter: true,
    showClear: true,
    selectedItemsLabel: "Element(e) ausgewählt",
};

export const MultiSelectBadge = Template.bind({});
MultiSelectBadge.args = {
    options: cities,
    filter: true,
    showClear: true,
    selectedItemsLabel: "Element(e) ausgewählt",
    selectedItemsTemplate: badgeTemplate,
    itemsTemplate: badgeItemsTemplate,
};
