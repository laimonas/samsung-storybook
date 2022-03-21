import * as React from "react";
import { IconButton, IconButtonProps } from "@material-ui/core";

import Info12px from "../../../../resources/icons/12px/Info12px";

interface IInfoHeaderProps {
    text: string;
    props?: IconButtonProps;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const InfoHeader: React.FunctionComponent<IInfoHeaderProps> = ({ text, props, onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        onClick && typeof onClick === "function" && onClick(event);
    };

    return (
        <>
            <span>{text}</span>
            <IconButton {...props} aria-label="Info" component="span" size="small" onClick={handleClick}>
                <Info12px fontSize="small" />
            </IconButton>
        </>
    );
};
