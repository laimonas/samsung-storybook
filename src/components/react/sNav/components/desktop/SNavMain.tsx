import * as React from "react";

import { NavigationItemModel } from "../../models";

export interface ISNavRootProps {
    items: NavigationItemModel[];
    onSelected: (selected?: number) => void;
    selected?: number;
}

export class SNavMain extends React.PureComponent<ISNavRootProps> {
    constructor(props: ISNavRootProps) {
        super(props);
        this.state = {
            selected: this.props.selected,
        };
    }

    onSelected(selected: number) {
        this.props.onSelected(selected);
    }

    public render() {
        const navItems = this.props.items.map((item, index) => {
            return (
                <li
                    key={`${item.Name}${index}`}
                    className={`sNav__desktop__item ${index === this.props.selected ? "active" : ""}`}
                    onMouseEnter={() => this.onSelected(index)}
                    onMouseLeave={() => {
                        !item.Children?.length && this.props.onSelected();
                    }}
                >
                    {!item.Children?.length ? (
                        <a className="sNav__desktop__item__text" href={item.Link?.Url!} target={item.Link?.Target || undefined}>
                            {item.Name}
                        </a>
                    ) : (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className="sNav__desktop__item__text">{item.Name}</a>
                    )}
                </li>
            );
        });
        return <ul className="sNav__desktop py6">{navItems}</ul>;
    }
}
