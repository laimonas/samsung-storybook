import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { iconUrlHelper, SIconSize } from "../../../../../utils";
import SButton from "../../../sButton/SButton";
import SIcon from "../../../sIcon/SIcon";
import { NavigationItemModel } from "../../models";
import { Category } from "../category";
import { SNavSub2 } from "./SNavSub2";

export interface ISNavSub1Props {
    items: NavigationItemModel[];
    parent: NavigationItemModel;
    onClose: () => void;
}

export interface ISNavSub1State {
    selected: number;
    rootCategoryInfo: any;
}

export class SNavSub1 extends React.Component<ISNavSub1Props, ISNavSub1State> {
    private readonly nextForwardLargeIconUrl = iconUrlHelper("NextForward", SIconSize.Large);
    private readonly cancelCloseLargeIconUrl = iconUrlHelper("CancelClose", SIconSize.Large);

    constructor(props: ISNavSub1Props) {
        super(props);

        const { parent } = props;
        const categoryImage = parent.CategoryImage?.Url ?? "";

        this.state = {
            selected: 0,
            rootCategoryInfo: {
                style: {
                    backgroundImage: `url('${categoryImage}`,
                },
                link: parent.Link,
                text: parent.Text,
            },
        };
    }

    private getSubNavigationItem(item: NavigationItemModel, index: number): React.ReactNode {
        return item.Children?.length ? (
            <div className="row">
                <div className="col-9" onMouseEnter={() => this.setState({ selected: index })}>
                    <a className="sNav__sub__item__text" href={item.Link?.Url ?? ""} target={item.Link?.Target || undefined}>
                        {item.Name}
                    </a>
                </div>
                {!!item.Children?.length && (
                    <div className="col-3">
                        <SIcon xlinkHref={this.nextForwardLargeIconUrl} className={"sNav__sub__item__icon large gray-1"} />
                    </div>
                )}
            </div>
        ) : (
            <div className="row">
                <div className="col-9" onMouseEnter={() => this.setState({ selected: index })}>
                    <a className="sNav__sub__item__text link" href={item.Link?.Url ?? ""} target={item.Link?.Target || undefined}>
                        {item.Name}
                    </a>
                </div>
            </div>
        );
    }

    public render() {
        const navItems = this.props.items.map((item, index) => {
            return (
                <li key={`${item.Name}${index}`} className={`sNav__sub__item mb8 ${index === this.state.selected ? "active" : ""}`}>
                    {this.getSubNavigationItem(item, index)}
                </li>
            );
        });

        const { CategoryImage, CategoryLink, Text } = this.props.parent;
        const shouldRenderCategoryImageSection = CategoryImage?.Url || CategoryLink?.Name || Text;

        return (
            <div className={`sNav__sub`}>
                <div className="container container-xxl sNav__sub__container ">
                    <div className="row">
                        <div className="col-11 my8">
                            {this.props.parent.Link.Url ? (
                                <a
                                    className="sNav__sub__name animated"
                                    href={this.props.parent.Link.Url}
                                    target={this.props.parent.Link.Target || undefined}
                                >
                                    {this.props.parent.Name}
                                </a>
                            ) : (
                                <h5 className="sNav__sub__name">{this.props.parent.Name}</h5>
                            )}
                        </div>

                        <div className="col-1 position-relative">
                            <SButton className="btn-icon large sNav__sub__close" onClick={this.props.onClose}>
                                <SIcon className="large black" xlinkHref={this.cancelCloseLargeIconUrl} />
                            </SButton>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <ul className="sNav__sub__list py1 px0">{navItems}</ul>
                        </div>
                        <div className="col-4 overflow-hidden">
                            <CSSTransition in appear timeout={400} classNames="slide">
                                <SNavSub2
                                    parentKey={`${this.props.items[this.state.selected!]?.Name}${this.state.selected}`}
                                    items={this.props.items[this.state.selected!].Children || []}
                                />
                            </CSSTransition>
                        </div>
                        {shouldRenderCategoryImageSection && (
                            <div className="col-4 sNav__sub__category-wrapper">
                                <Category category={this.props.parent} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
