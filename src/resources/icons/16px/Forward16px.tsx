import * as React from "react";

function Forward16px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16px 16px" {...props}><defs><path id="forward16px-a" d="M9.60739091,2.01034677 L15.8191975,7.9688716 L9.60739091,13.9273964 L8.84592582,13.1335634 L13.6540999,8.51834677 L0.91309987,8.51903761 L0.91309987,7.41903761 L13.6560999,7.41834677 L8.84592582,2.80417982 L9.60739091,2.01034677 Z" /></defs><g fill="none" fillRule="evenodd"><mask id="forward16px-b" fill="#fff"><use xlinkHref="#forward16px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#forward16px-a" /><g fill="currentColor" mask="url(#forward16px-b)"><rect width={16} height={16} /></g></g></svg>;
}

export default Forward16px;