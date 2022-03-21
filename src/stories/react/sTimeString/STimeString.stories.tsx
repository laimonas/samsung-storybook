import { Story } from "@storybook/react";
import moment from "moment";
import React from "react";

import { STimeString } from "../../../components";

export default {
    title: "React/STimeString",
    component: STimeString,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof STimeString>;

const Template: Story<PropsType> = (args) => {
    return <STimeString {...args} />;
};

export const WeeksInPast = Template.bind({});
WeeksInPast.args = {
    value: moment().subtract(7, 'weeks').format()
};

export const DaysInPast = Template.bind({});
DaysInPast.args = {
    value: moment().subtract(3, 'days').format()
};

export const HoursInPast = Template.bind({});
HoursInPast.args = {
    value: moment().subtract(8, 'hour').format()
};

export const MinutesInPast = Template.bind({});
MinutesInPast.args = {
    value: moment().subtract(33, 'minutes').format()
};

// export const WeeksInFuture = Template.bind({});
// WeeksInFuture.args = {
//     value: moment().add(7, 'weeks').format()
// };

// export const DaysInFuture = Template.bind({});
// DaysInFuture.args = {
//     value: moment().add(3, 'days').format()
// };

// export const HoursInFuture = Template.bind({});
// HoursInFuture.args = {
//     value: moment().add(8, 'hour').format()
// };

// export const MinutesInFuture = Template.bind({});
// MinutesInFuture.args = {
//     value: moment().add(8, 'minutes').format()
// };

