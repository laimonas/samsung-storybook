import { Story } from "@storybook/react";
import React, { useState } from "react";
import { SCheckbox } from "../../../components";

export default {
    title: "React/SCheckbox",
    component: SCheckbox,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SCheckbox>;
const Template: Story<PropsType> = (args) => {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    return (
        <div>
            <SCheckbox {...args} checked={checked} setChecked={setChecked} />
            <SCheckbox {...args} checked={checked2} setChecked={setChecked2} />
        </div>
    );
};

export const Checkbox = Template.bind({});
Checkbox.args = {
    id: "someID",
    label: "Checkbox Label",
    disabled: false,
    className: "form-check form-check-inline",
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
    id: "someIDDisabled",
    label: "Checkbox Label",
    disabled: true,
};
