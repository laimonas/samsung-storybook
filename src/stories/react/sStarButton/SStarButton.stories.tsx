import React, { useState } from "react";

import { Story } from "@storybook/react";
import { SStarButton } from "../../../components";

export default {
    title: "React/SStarButton",
    component: SStarButton,
};

type PropsType = React.ComponentProps<typeof SStarButton>;
const Template: Story<PropsType> = (args) => {
    const [isSelected, setSelected] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelected(!isSelected)
    }
    return <SStarButton {...args} isSelected={isSelected} onClick={handleClick} />;
};

export const StarButton = Template.bind({});
StarButton.args = {};
