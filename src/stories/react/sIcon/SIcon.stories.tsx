import React from "react";
import { Story } from "@storybook/react";

import { SIcon } from "../../../components";
import { Backward12px, Backward16px, Backward24px } from "../../../resources";
import { SIconSize } from "../../../utils";

export default {
    title: "React/SIcon (PD)",
    component: SIcon,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SIcon>;

const Template: Story<PropsType> = (args) => <SIcon {...args} />;

export const IconMedium = Template.bind({});

IconMedium.args = {
    className: " black",
    xlinkHref: "/images/icons/16px/FilterFilled16px.svg#filterfilled16px-a",
};

export const IconLarge = Template.bind({});

IconLarge.args = {
    className: " black",
    iconName: "FilterFilled",
    iconSize: SIconSize.Large,
};

const Template12: Story<React.ComponentProps<typeof Backward12px>> = (args) => <Backward12px {...args} />;
export const SvgIcon12 = Template12.bind({});
const Template16: Story<React.ComponentProps<typeof Backward16px>> = (args) => <Backward16px {...args} />;
export const SvgIcon16 = Template16.bind({});
const Template24: Story<React.ComponentProps<typeof Backward24px>> = (args) => <Backward24px {...args} />;
export const SvgIcon24 = Template24.bind({});
