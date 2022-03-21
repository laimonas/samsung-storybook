import { createTheme, makeStyles } from "@material-ui/core/styles";

import { TextInputColor } from "./SPropertyField";

const colors = {
    white: "#ffffff",
    black: "#000000",
    primary: "#2189ff",
    red: "#ef3434",
    gray: "#8f8f8f",
    lightGray: "#dddddd",
    green: "#15b86d",
};

export const generateLabelStyles = (value: string, error?: boolean) =>
    makeStyles({
        root: {
            fontSize: "18px",
            color: value ? `${colors.black}` : `${colors.gray}`,
            fontWeight: value ? 700 : 400,
            display: "flex",
        },
        disabled: {
            color: `${colors.lightGray} !important`,
        },
        focused: {
            color: error ? `${colors.red}` : `${colors.black} !important`,
            fontWeight: 700,
        },
        shrink: {
            color: error ? `${colors.red}` : `${colors.black}`,
            fontWeight: 700,
        },
        asterisk: {
            transform: "translateX(-30%)",
        },
    });

export const generateInputStyles = (editMode: boolean, focused: boolean, inputTextColor?: TextInputColor, disabled?: boolean) => {
    let borderBottomColor = `${colors.white}`;
    if (editMode && !focused) {
        borderBottomColor = `${colors.black}`;
    }

    const customColor: string = inputTextColor ? colors[inputTextColor] : colors.black;

    return makeStyles({
        root: {
            color: disabled ? `${colors.lightGray} !important` : `${customColor} !important`,
            fontSize: "18px",
            borderBottom: "1px solid",
            borderBottomColor,
            position: "relative",
        },
        input: {
            width: editMode ? "calc(100% - 88px)" : "calc(100% - 42px)",
        },
        formControl: {
            width: "100%",
        },
    });
};

export const generateSelectStyles = () =>
    makeStyles({
        root: {
            width: "100%",
            color: `${colors.black}`,
            fontSize: "18px",
        },
    });

export const propertyFieldTheme = createTheme({
    typography: {
        fontFamily: ['"SamsungOne"', '"sans-serif"'].join(","),
    },
    palette: {
        primary: { main: `${colors.primary}` },
        error: { main: `${colors.red}` },
    },
});
