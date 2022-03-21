import React, { useState } from "react";

import { Bookmark16px, BookmarkFilled16px } from "../../../resources";
import SButton from "../sButton/SButton";

interface ISStarButton {
    className?: string;
    disabled?: boolean;
    /**
     * set a margin for the icon whether its before or after
     * icon-before | icon-after
     */
    iconPosition?: string;
    /**
     * pass a function to be called on button click event
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;

    isSelected: boolean;
}

const starIconNormal = <Bookmark16px className="not-selected svg-icon" />;
const starIconHovered = <BookmarkFilled16px className="svg-icon hover primary-blue" />;
const starIconSelected = <BookmarkFilled16px className="svg-icon selected primary-blue" />;

const SStarButton: React.FunctionComponent<ISStarButton> = ({ className, disabled, iconPosition, onClick, isSelected }) => {
    const [isHovered, setHovered] = useState(false);

    const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHovered(!isHovered);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(event);
    };

    return (
        <SButton
            onClick={handleClick}
            className={"btn-icon large" + className}
            children={isSelected ? starIconSelected : isHovered ? starIconHovered : starIconNormal}
            disabled={disabled}
            iconPosition={iconPosition}
            onHover={handleHover}
        ></SButton>
    );
};

export default SStarButton;
