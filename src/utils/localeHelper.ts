import { Currencies, LocalesDate, LocalesNumberFormat, NumberFormatStyle } from "../constants";

export const getCalenderFormat = (locale: string): object => {
    switch (locale) {
        case LocalesDate.DE:
            return {
                firstDayOfWeek: 1,
                dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                dayNamesShort: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
                dayNamesMin: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
                monthNames: [
                    "Januar",
                    "Februar",
                    "März",
                    "April",
                    "Mai",
                    "Juni",
                    "Juli",
                    "August",
                    "September",
                    "Oktober",
                    "November",
                    "Dezember",
                ],
                monthNamesShort: ["jan", "feb", "mär", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "dez"],
                today: "Heute",
                clear: "Löschen",
            };
        default:
            return {};
    }
};

export const getNavigatorLanguage = (): string =>
    navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator?.language || LocalesDate.DE;

export const numberFormatDe = (value: number) =>
    new Intl.NumberFormat(LocalesNumberFormat.DE, {
        style: NumberFormatStyle.CURRENCY,
        currency: Currencies.DE,
    }).format(value);
