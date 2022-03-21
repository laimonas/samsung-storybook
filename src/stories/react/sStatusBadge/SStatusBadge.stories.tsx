import React from "react";
import { Story } from "@storybook/react";

import { SStatusBadge } from "../../../components";

export default {
    title: "React/SStatus Badge (PD)",
    component: SStatusBadge,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SStatusBadge>;
const Template: Story<PropsType> = (args) => <SStatusBadge {...args} />;

export const StatusBadge = Template.bind({});

StatusBadge.args = {
    text: "Green",
    colorName: "green",
};
