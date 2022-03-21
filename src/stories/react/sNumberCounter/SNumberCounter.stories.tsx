import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SNumberCounter } from "../../../components/react/sNumberCounter";

export default {
    title: "React/SNumberCounter (PD)",
    component: SNumberCounter,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SNumberCounter>;
const Template: Story<PropsType> = (args) => {
    const [amount, setAmount] = useState<number>(1);
    return <SNumberCounter {...args} value={amount} onSetValue={setAmount} />;
};

export const NumberCounter = Template.bind({});

NumberCounter.args = {
    min: 1,
    max: 20,
    minimal: false
};

export const NumberCounterMini = Template.bind({});

NumberCounterMini.args = {
    min: 1,
    max: 20,
    minimal: true
};
