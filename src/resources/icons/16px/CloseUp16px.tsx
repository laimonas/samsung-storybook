import * as React from "react";

function CloseUp16px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16px 16px" {...props}><defs><polygon id="closeup16px-a" points="2.015 10.405 7.969 4.363 13.922 10.405 13.139 11.177 7.969 5.929 2.799 11.177" /></defs><g fill="none" fillRule="evenodd"><mask id="closeup16px-b" fill="#fff"><use xlinkHref="#closeup16px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#closeup16px-a" /><g fill="currentColor" mask="url(#closeup16px-b)"><rect width={16} height={16} /></g></g></svg>;
}

export default CloseUp16px;