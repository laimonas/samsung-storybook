import IconButton from "@material-ui/core/IconButton";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import { PaperProps } from "@material-ui/core/Paper";
import * as React from "react";
import { PopoverOrigin } from "@material-ui/core/Popover/Popover";

interface ISDropdownMenu {
    items: React.ReactNode[];
    anchorEl: MenuProps["anchorEl"];
    setAnchorEl: (value: React.SetStateAction<MenuProps["anchorEl"]>) => void;
    anchorOrigin?: PopoverOrigin;
    disableScrollLock?: boolean;
    paperStyleProps?: PaperProps;
    menuId: string;
    buttonId?: string;
    trigger: React.ReactNode;
}

const SDropdownMenu: React.FunctionComponent<ISDropdownMenu> = ({
    items,
    anchorEl,
    setAnchorEl,
    anchorOrigin,
    disableScrollLock,
    paperStyleProps,
    menuId,
    buttonId,
    trigger,
}) => {
    const open = !!anchorEl;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="s-dropdown-menu">
            <IconButton className={buttonId} aria-label="more" aria-controls={menuId} aria-haspopup="true" onClick={handleClick}>
                {trigger}
            </IconButton>
            <Menu
                id={menuId}
                disableScrollLock={disableScrollLock}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={anchorOrigin}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={paperStyleProps}
            >
                {items}
            </Menu>
        </div>
    );
};

export default SDropdownMenu;
