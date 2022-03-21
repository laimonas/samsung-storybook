import * as React from "react";
import { Meta } from "@storybook/react";

import "./index.scss";

export default {
    title: "Base/Spacing",
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{ margin: "1em" }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const sizes = () => {
    return (
        <div className="spacings">
            <h4 className="mb6">Spacinngs are usefull helper classes which align to design spacing convention</h4>
            <h6>Logic and conventions</h6>
            <ul>
                <li>In CSS we recognize 2 types of spacings - Margins and Paddings</li>
                <li>Smallest unit of space is agreed to be a quarter of a 1rem (16px/4 = 4px)</li>
                <li>Every spacing in design is must be dividable by a quarter of 1rem (4px)</li>
                <li>Largest spacing block is agreed to be 3rem (48px)</li>
                <li>This gives us 12 (48/4) equal spacing steps to use, each greater by quarter of REM (4px) then previous</li>
                <li>To those 12 we add initial step "0" (0px) which is used to neutralize any existing spacing</li>
                <li>If any of previously mentioned convention is not matching designs, please reach out to design team for corrections</li>
            </ul>
            <h6 className="pt4">All available spaces</h6>
            <table className="steps-table">
                <tbody>
                    <tr>
                        <td>0 = 0</td>
                        <td>1 = .25rem</td>
                        <td>2 = .5rem</td>
                        <td>3 = .75rem</td>
                        <td>4 = 1rem</td>
                        <td>5 = 1.25rem</td>
                        <td>6 = 1.5rem</td>
                        <td>7 = 1.75rem</td>
                        <td>8 = 2rem</td>
                        <td>9 = 2.25rem</td>
                        <td>10 = 2.5rem</td>
                        <td>11 = 2.75rem</td>
                        <td>12 = 3rem</td>
                    </tr>
                </tbody>
            </table>
            <h6 className="pt4">Class naming template</h6>
            <ul>
                <li>
                    Examples for all equal sides spacing <code>{"'${spacing-type: p | m}${step: 0-12}'"}</code>
                    <ul>
                        <li>
                            {'<div class="m0">...</div>'} <code>{"// {margin: 0;}"}</code>
                        </li>
                        <li>
                            {'<div class="p2">...</div>'} <code>{"// {padding: 0.5rem;}"}</code>
                        </li>
                    </ul>
                </li>
                <li className="mt2">
                    Examples for spacing with same axis <code>{"'${spacing-type: p | m}${axis: x | y }${step: 0-12}'"}</code>
                    <ul>
                        <li>
                            {'<div class="mx0">...</div>'} <code>{"// {margin-left: 0; margin-right: 0;}"}</code>
                        </li>
                        <li>
                            {'<div class="py2">...</div>'} <code>{"// {padding-top: 0.5rem; padding-bottom: 0.5rem;}"}</code>
                        </li>
                    </ul>
                </li>
                <li className="mt2">
                    Examples side specific spacing <code>{"'${spacing-type: p | m}${side: t | b | l | r }}${step: 0-12}'"}</code>
                    <ul>
                        <li>
                            {'<div class="mt0">...</div>'} <code>{"// {margin-top: 0;}"}</code>
                        </li>
                        <li>
                            {'<div class="pb2">...</div>'} <code>{"// {padding-bottom: 0.5rem;}"}</code>
                        </li>
                        <li>
                            {'<div class="ml0">...</div>'} <code>{"// {margin-left: 0;}"}</code>
                        </li>
                        <li>
                            {'<div class="pr2">...</div>'} <code>{"// {padding-right: 0.5rem;}"}</code>
                        </li>
                    </ul>
                </li>
            </ul>
            <h6 className="pt4">Combining</h6>
            <ul>
                <li>
                    You can combine any of spacing helpers
                    <ul>
                        <li>
                            {'<div class="py2 mx0 pl3">...</div>'} <code>{"// {padding-top: 0.5rem; padding-bottom: 0.5rem; margin: 0; padding-right: 0.75rem}"}</code>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
