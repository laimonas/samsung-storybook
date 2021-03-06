import * as React from "react";

function GoToEnd24px(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24px 24px"
            {...props}
        >
            <defs>
                <path
                    id="gotoend24px-a"
                    d="M5.550553,4.0945715 L6.449447,3.1554285 L15.6900441,12 L6.449447,20.8445715 L5.550553,19.9054285 L13.809,11.999 L5.550553,4.0945715 Z M17.65,3.25 L17.65,20.75 L16.35,20.75 L16.35,3.25 L17.65,3.25 Z"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="gotoend24px-b" fill="#fff">
                    <use xlinkHref="#gotoend24px-a" />
                </mask>
                <use fill="currentColor" fillRule="nonzero" xlinkHref="#gotoend24px-a" />
                <g fill="currentColor" mask="url(#gotoend24px-b)">
                    <rect width={24} height={24} />
                </g>
            </g>
        </svg>
    );
}

export default GoToEnd24px;
