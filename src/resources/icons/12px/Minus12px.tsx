import * as React from "react";

function Minus12px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 12px 12px" {...props}><defs><polygon id="minus12px-a" points="11 5.5 11 6.5 1 6.5 1 5.5" /></defs><g fill="none" fillRule="evenodd"><mask id="minus12px-b" fill="#fff"><use xlinkHref="#minus12px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#minus12px-a" /><g fill="currentColor" mask="url(#minus12px-b)"><rect width={12} height={12} /></g></g></svg>;
}

export default Minus12px;