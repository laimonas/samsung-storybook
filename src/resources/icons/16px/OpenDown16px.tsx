import * as React from "react";

function OpenDown16px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16px 16px" {...props}><defs><polygon id="opendown16px-a" points="13.139 4.761 13.922 5.533 7.969 11.575 2.015 5.533 2.799 4.761 7.969 10.008" /></defs><g fill="none" fillRule="evenodd"><mask id="opendown16px-b" fill="#fff"><use xlinkHref="#opendown16px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#opendown16px-a" /><g fill="currentColor" mask="url(#opendown16px-b)"><rect width={16} height={16} /></g></g></svg>;
}

export default OpenDown16px;