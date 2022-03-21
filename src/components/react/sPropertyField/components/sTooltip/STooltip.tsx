import React from "react";

import { Info12px } from "../../../../../resources";
import SPopover from "../../../sPopover/SPopover";

interface ISTooltipProps {
    content: React.ReactNode;
    tooltipClassName?: string;
}

const STooltip: React.FunctionComponent<ISTooltipProps> = ({ content, tooltipClassName }) => {
    return (
        <SPopover
            id="property-field-label-tooltip"
            triggerItem={
                <button className="btn-v2 btn-label">
                    <Info12px />
                </button>
            }
            content={content}
            placement="auto"
            trigger={["focus", "hover"]}
            className={tooltipClassName}
        />
    );
};

export default STooltip;
