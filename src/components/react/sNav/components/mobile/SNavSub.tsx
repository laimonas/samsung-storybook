import * as React from "react";

import { SExpandable } from "../../../sExpandable";
import { NavigationItemModel } from "../../models";

export interface ISNavSubProps {
    item: NavigationItemModel;
}

export class SNavSub extends React.PureComponent<ISNavSubProps> {
    public render() {
        const { item } = this.props;
        return (
            <div>
                {item.Link.Url ? (
                    <a
                        href={item.Link.Url}
                        target={item.Link.Target || undefined}
                        className="font-h5-mobile family-sharp bold my4 sNav__mobile__sub__title"
                    >
                        {item.Name}
                    </a>
                ) : (
                    <h5 className="font-h5-mobile family-sharp bold my4">{item.Name}</h5>
                )}
                {item.Children?.length && (
                    <SExpandable
                        items={item.Children!.map((current) => {
                            return {
                                title: current.Name!,
                                disabled: !current.Children?.length,
                                link: current.Link?.Url,
                                target: current.Link?.Target,
                                child: (
                                    <div key={current.Name}>
                                        {current.Link.Url && (
                                            <a
                                                className="sNav__mobile__sub__link d-block font-sub-h4-mobile thin family-one py3 "
                                                key="0"
                                                href={current.Link?.Url ?? ""}
                                                target={current.Link?.Target || undefined}
                                            >
                                                Überblick
                                            </a>
                                        )}
                                        {current.Children?.map((currentSub) => {
                                            return (
                                                <a
                                                    className="sNav__mobile__sub__link d-block font-sub-h4-mobile thin family-one py3 "
                                                    key={currentSub.Name}
                                                    href={currentSub.Link?.Url ?? ""}
                                                    target={currentSub.Link?.Target || undefined}
                                                >
                                                    {currentSub.Name}
                                                </a>
                                            );
                                        })}
                                    </div>
                                ),
                            };
                        })}
                    />
                )}
            </div>
        );
    }
}
