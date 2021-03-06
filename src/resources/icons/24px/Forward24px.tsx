import * as React from "react";

function Forward24px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24px 24px" {...props}><defs><path id="forward24px-a" d="M14.2899442,3.14181178 L23.4759941,11.9533074 L14.2899442,20.764803 L13.3900309,19.8266367 L20.9196498,12.6028118 L1.36964981,12.6035564 L1.36964981,11.3035564 L20.9196498,11.3028118 L13.3900309,4.07997811 L14.2899442,3.14181178 Z" /></defs><g fill="none" fillRule="evenodd"><mask id="forward24px-b" fill="#fff"><use xlinkHref="#forward24px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#forward24px-a" /><g fill="currentColor" mask="url(#forward24px-b)"><rect width={24} height={24} /></g></g></svg>;
}

export default Forward24px;