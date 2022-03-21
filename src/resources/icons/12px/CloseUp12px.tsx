import * as React from "react";

function CloseUp12px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 12px 12px" {...props}><defs><polygon id="closeup12px-a" points="1.449 7.742 5.977 3.148 10.504 7.742 9.792 8.444 5.976 4.571 2.162 8.444" /></defs><g fill="none" fillRule="evenodd"><mask id="closeup12px-b" fill="#fff"><use xlinkHref="#closeup12px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#closeup12px-a" /><g fill="currentColor" mask="url(#closeup12px-b)"><rect width={12} height={12} /></g></g></svg>;
}

export default CloseUp12px;