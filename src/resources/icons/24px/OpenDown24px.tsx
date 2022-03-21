import * as React from "react";

function OpenDown24px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24px 24px" {...props}><defs><polygon id="opendown24px-a" points="19.833 7.264 20.759 8.176 11.953 17.113 3.148 8.176 4.074 7.264 11.953 15.26" /></defs><g fill="none" fillRule="evenodd"><mask id="opendown24px-b" fill="#fff"><use xlinkHref="#opendown24px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#opendown24px-a" /><g fill="currentColor" mask="url(#opendown24px-b)"><rect width={24} height={24} /></g></g></svg>;
}

export default OpenDown24px;