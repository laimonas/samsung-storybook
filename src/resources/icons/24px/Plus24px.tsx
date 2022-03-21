import * as React from "react";

function Plus24px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24px 24px" {...props}><defs><path id="plus24px-a" d="M12.65,2 L12.65,11.35 L22,11.35 L22,12.65 L12.65,12.65 L12.65,22 L11.35,22 L11.35,12.65 L2,12.65 L2,11.35 L11.35,11.35 L11.35,2 L12.65,2 Z" /></defs><g fill="none" fillRule="evenodd"><mask id="plus24px-b" fill="#fff"><use xlinkHref="#plus24px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#plus24px-a" /><g fill="currentColor" mask="url(#plus24px-b)"><rect width={24} height={24} /></g></g></svg>;
}

export default Plus24px;