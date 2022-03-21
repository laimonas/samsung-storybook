import React, { useEffect, useState } from "react";
import { Story } from "@storybook/react";

import { SPropertyField } from "../../../components";
import { badges, fruits, labelTemplate } from "../sDropdown/mock/mock";

export default {
    title: "React/SPropertyField (PD)",
    component: SPropertyField,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SPropertyField>;

const Template: Story<PropsType> = (args) => {
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState<string>("");

    useEffect(() => {
        const newHelperText = error ? "*Dies ist ein Pflichtfeld" : "";
        setHelperText(newHelperText);
    }, [error]);

    return (
        <div className="w-25">
            <SPropertyField {...args} value={value} setValue={setValue} error={error} setError={setError} helperText={helperText} />
        </div>
    );
};

export const PropertyField = Template.bind({});
PropertyField.args = {
    name: "prop-field",
    label: "Label",
    editable: true,
    required: true,
};

const ReadOnlyTemplate: Story<PropsType> = (args) => {
    const [value, setValue] = useState<string>("Input text");
    return (
        <div className="w-25">
            <SPropertyField {...args} value={value} setValue={setValue} />
        </div>
    );
};

export const ReadOnly = ReadOnlyTemplate.bind({});
ReadOnly.args = {
    name: "readOnly",
    label: "Label",
};

export const ReadOnlyWithTooltip = ReadOnlyTemplate.bind({});
ReadOnlyWithTooltip.args = {
    name: "readOnly-tooltip",
    label: "Label",
    tooltipContent: "Tooltip",
};

export const Dropdown = Template.bind({});
Dropdown.args = {
    name: "dropdown",
    label: "Label",
    items: fruits,
    required: true,
};

export const StatusBadge = Template.bind({});
StatusBadge.args = {
    name: "status-badge",
    label: "Label",
    items: badges,
    customLabelTemplate: labelTemplate,
};
