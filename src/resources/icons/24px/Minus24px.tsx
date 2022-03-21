import * as React from "react";

function Minus24px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24px 24px" {...props}><defs><polygon id="minus24px-a" points="22 11.35 22 12.65 2 12.65 2 11.35" /></defs><g fill="none" fillRule="evenodd"><mask id="minus24px-b" fill="#fff"><use xlinkHref="#minus24px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#minus24px-a" /><g fill="currentColor" mask="url(#minus24px-b)"><rect width={24} height={24} /></g></g></svg>;
}

export default Minus24px;