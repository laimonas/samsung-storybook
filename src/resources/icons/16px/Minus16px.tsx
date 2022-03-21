import * as React from "react";

function Minus16px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16px 16px" {...props}><defs><polygon id="minus16px-a" points="14.667 7.45 14.667 8.55 1.333 8.55 1.333 7.45" /></defs><g fill="none" fillRule="evenodd"><mask id="minus16px-b" fill="#fff"><use xlinkHref="#minus16px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#minus16px-a" /><g fill="currentColor" mask="url(#minus16px-b)"><rect width={16} height={16} /></g></g></svg>;
}

export default Minus16px;