﻿import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SNavTab, ISNavTab } from "../../../components";

export default {
    title: "React/SNavTab",
    component: SNavTab,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SNavTab>;
const Template: Story<PropsType> = (args: ISNavTab) => {
    const [activeItem, setActiveItem] = useState(0);
    return <SNavTab {...args} activeItem={activeItem} setActiveItem={setActiveItem} />;
};
export const NavTab = Template.bind({});

NavTab.args = {
    className: "px4",
    navItems: [
        {
            label: "Alle",
            link: "#alle",
        },
        {
            label: "Test",
            link: "#test",
        },
    ],
};
