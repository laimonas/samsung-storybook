import { Story } from "@storybook/react";
import React from "react";

import { SDropdown } from "../../../components";
import { Plus16px } from "../../../resources/icons";
import { fruits, badges, labelTemplate } from "./mock/mock";

export default {
    title: "React/SDropdown (PD)",
    component: SDropdown,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SDropdown>;
const Template: Story<PropsType> = (args) => {
    const [dropdownValue, setDropdownValue] = React.useState<React.ReactNode>(null);
    return <SDropdown className="w-50" {...args} value={dropdownValue} setDropdownValue={setDropdownValue} />;
};

export const Primary = Template.bind({});
Primary.args = {
    defaultTextForSelect: "Fruit",
    items: fruits,
};

export const DropdownMenuPlus = Template.bind({});
DropdownMenuPlus.args = {
    defaultTextForSelect: "Fruit",
    items: fruits,
    icon: Plus16px,
};

export const DropdownMenuBadges = Template.bind({});
DropdownMenuBadges.args = {
    defaultTextForSelect: "Status",
    items: badges,
    customLabelTemplate: labelTemplate,
};

export const DropdownMenuLabel = Template.bind({});
DropdownMenuLabel.args = {
    label: "Status",
    items: badges,
    customLabelTemplate: labelTemplate,
};

export const DropdownMenuUnderline = Template.bind({});
DropdownMenuUnderline.args = {
    label: "Fruit",
    items: fruits,
    underline: true,
};
