import moment from 'moment';
import * as React from 'react';

export const timeIsoToHumanTimeDifferenceString = (input: string, localization = {
    weeks: "week(s)",
    days: "day(s)",
    hours: "hour(s)",
    minutes: "minute(s)",
    since: "Since",
    in: "In"
}): string => {

    const pastStringBuilder = (amount: number, measure: string) => {
        return `${localization.since} ${Math.round(amount)} ${measure}`;
    }

    const futureStringBuilder = (amount: number, measure: string) => {
        return `${localization.in} ${Math.abs(Math.round(amount))} ${measure}`;
    }

    try {
        const valueDateTime = moment(input);
        const duration = moment.duration(moment().diff(valueDateTime));

        if (valueDateTime.isBefore(moment())) {
            // For dates before now

            if (valueDateTime.isAfter(moment().subtract(1, 'hour'))) {

                return pastStringBuilder(duration.asMinutes(), localization.minutes);
            }
            else if (valueDateTime.isAfter(moment().subtract(2, 'day'))) {
                return pastStringBuilder(duration.asHours(), localization.hours);
            }
            else if (valueDateTime.isAfter(moment().subtract(4, 'week'))) {
                return pastStringBuilder(duration.asDays(), localization.days);
            }
            else {
                return pastStringBuilder(duration.asWeeks(), localization.weeks);
            }
        } else {
            // For dates after now

            if (valueDateTime.isBefore(moment().add(1, 'hour'))) {
                return futureStringBuilder(duration.asMinutes(), localization.minutes);
            }
            else if (valueDateTime.isBefore(moment().add(2, 'day'))) {
                return futureStringBuilder(duration.asHours(), localization.hours);
            }
            else if (valueDateTime.isBefore(moment().add(4, 'week'))) {
                return futureStringBuilder(duration.asDays(), localization.days);
            }
            else {
                return futureStringBuilder(duration.asWeeks(), localization.weeks);
            }
        }

    } catch (error) {
        console.log(error);

        return ''
    }
}

export interface ISTimeStringProps {
    // Iso DateTime format
    value: string
    // Localization strings
    localization?: {
        weeks: string;
        days: string;
        hours: string;
        minutes: string;
        since: string;
        in: string
    }
}

export const STimeString: React.FunctionComponent<ISTimeStringProps> = (props) => {
    return <span className="time-to-human-diff">{timeIsoToHumanTimeDifferenceString(props.value, props.localization)}</span>;
};

export default STimeString



