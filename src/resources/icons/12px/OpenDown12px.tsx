import * as React from "react";

function OpenDown12px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 12px 12px" {...props}><defs><polygon id="opendown12px-a" points="9.792 3.509 10.504 4.211 5.977 8.806 1.449 4.211 2.162 3.509 5.976 7.381" /></defs><g fill="none" fillRule="evenodd"><mask id="opendown12px-b" fill="#fff"><use xlinkHref="#opendown12px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#opendown12px-a" /><g fill="currentColor" mask="url(#opendown12px-b)"><rect width={12} height={12} /></g></g></svg>;
}

export default OpenDown12px;