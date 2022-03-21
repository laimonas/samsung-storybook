import React from "react";
import classNames from "classnames";

import SNavTabItem from "./sNavTabItem/SNavTabItem";
import { ISNavItem, ISNavTab } from "./models";

export const SNavTab: React.FunctionComponent<ISNavTab> = ({ className, navItems, setActiveItem, activeItem }) => {
    return (
        <div className="s-navtab__wrapper py1">
            <div className={classNames("s-navtab d-flex", className)}>
                {navItems.map((navItem: ISNavItem, index: number) => (
                    <SNavTabItem
                        key={`${navItem.label}_${navItem.link}`}
                        item={{ link: navItem.link, label: navItem.label }}
                        onSetActiveItem={setActiveItem}
                        activeItem={activeItem}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SNavTab;
