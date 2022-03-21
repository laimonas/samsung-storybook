import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import { MenuProps } from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { Story } from "@storybook/react";
import React, { useState } from "react";

import { SDropdownMenu, SIcon, SMaterialIcon } from "../../../components";
import { SIconSize } from "../../../utils";

export default {
    title: "React/SDropdownMenu",
    component: SDropdownMenu,
    argTypes: {},
};

const ITEM_HEIGHT = 48;

const paperStyleProps = {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: "20ch",
    },
};

type PropsType = React.ComponentProps<typeof SDropdownMenu>;
const TemplateWithIcons: Story<PropsType> = (args) => {
    const handleClick = (e: any) => {
        console.log("Click", e);
        setAnchorEl(null);
    };
    const itemWithIcon1 = (
        <MenuItem key="key1" onClick={(event) => handleClick(event)}>
            <ListItemIcon>
                <SMaterialIcon iconUrl="/images/icons/16px/Delete16px.svg#delete16px-a" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
                <span className="font-body2 family-one">Hello!</span>
            </Typography>
        </MenuItem>
    );

    const itemWithIcon2 = (
        <MenuItem key="key2" onClick={(event) => handleClick(event)}>
            <ListItemIcon>
                <SMaterialIcon iconUrl="/images/icons/16px/Cart16px.svg#cart16px-a" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
                <span className="font-body2 family-one">Bye!</span>
            </Typography>
        </MenuItem>
    );

    const itemsWithIcon = [itemWithIcon1, itemWithIcon2];

    const [anchorEl, setAnchorEl] = useState<MenuProps["anchorEl"]>(null);
    return <SDropdownMenu {...args} items={itemsWithIcon} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />;
};

const Template: Story<PropsType> = (args) => {
    const handleClick = (e: any) => {
        console.log("Click", e);
        setAnchorEl(null);
    };
    const item1 = (
        <MenuItem key="key1" onClick={(event) => handleClick(event)}>
            <Typography variant="inherit" noWrap>
                <span className="font-body2 family-one">Hello!</span>
            </Typography>
        </MenuItem>
    );
    const item2 = (
        <MenuItem key="key2" onClick={(event) => handleClick(event)}>
            <Typography variant="inherit" noWrap>
                <span className="font-body2 family-one">Bye!</span>
            </Typography>
        </MenuItem>
    );

    const items = [item1, item2];

    const [anchorEl, setAnchorEl] = useState<MenuProps["anchorEl"]>(null);
    return <SDropdownMenu {...args} items={items} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />;
};

export const DropdownMenuIcons = TemplateWithIcons.bind({});
DropdownMenuIcons.args = {
    paperStyleProps: paperStyleProps,
    menuId: "long-menu",
    trigger: <SIcon iconName="kebab" iconSize={SIconSize.Medium} />,
};

export const DropdownMenuIconButtons = TemplateWithIcons.bind({});
DropdownMenuIconButtons.args = {
    paperStyleProps: paperStyleProps,
    menuId: "long-menu",
    trigger: <div className="btn-v2 btn-black">Test</div>,
};

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
    paperStyleProps: paperStyleProps,
    menuId: "long-menu",
    trigger: <SIcon iconName="delete" iconSize={SIconSize.Medium} />,
};
