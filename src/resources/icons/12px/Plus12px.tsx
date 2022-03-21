import * as React from "react";

function Plus12px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 12px 12px" {...props}><defs><path id="plus12px-a" d="M6.5,1 L6.5,5.5 L11,5.5 L11,6.5 L6.5,6.5 L6.5,11 L5.5,11 L5.5,6.5 L1,6.5 L1,5.5 L5.5,5.5 L5.5,1 L6.5,1 Z" /></defs><g fill="none" fillRule="evenodd"><mask id="plus12px-b" fill="#fff"><use xlinkHref="#plus12px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#plus12px-a" /><g fill="currentColor" mask="url(#plus12px-b)"><rect width={12} height={12} /></g></g></svg>;
}

export default Plus12px;