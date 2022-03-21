import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Moment } from "moment";

import { SDatePicker } from "../../../components";

export default {
    title: "React/SDatePicker (PD)",
    component: SDatePicker,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SDatePicker>;

const Template: Story<PropsType> = (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | Moment | string | null>();

    return (
        <div className="w-25">
            <SDatePicker {...args} onDateChange={setSelectedDate} />
        </div>
    );
};

export const DatePicker = Template.bind({});
DatePicker.args = {
    dateDisplayFormat: "DD.MM.YYYY",
    stringOutputFormat: "YYYY-MM-DD",
    dateOutputType: "string",
    locale: "de",
    label: "Startdatum",
    required: true,
    id: "date-picker",
    inputId: "date-picker-input",
    disabled: false,
    dateAsMoment: false,
    helperText: "Required field",
};
