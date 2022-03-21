import * as React from "react";

function Forward12px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 12px 12px" {...props}><defs><path id="forward12px-a" d="M7.26611427,1.44461427 L11.9907992,5.9766537 L7.26611427,10.5086931 L6.57387328,9.78702672 L10.0238249,6.47661427 L0.684824903,6.47677821 L0.684824903,5.47677821 L10.0258249,5.47661427 L6.57387328,2.16628067 L7.26611427,1.44461427 Z" /></defs><g fill="none" fillRule="evenodd"><mask id="forward12px-b" fill="#fff"><use xlinkHref="#forward12px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#forward12px-a" /><g fill="currentColor" mask="url(#forward12px-b)"><rect width={12} height={12} /></g></g></svg>;
}

export default Forward12px;