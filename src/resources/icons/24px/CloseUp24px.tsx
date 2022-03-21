import * as React from "react";

function CloseUp24px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24px 24px" {...props}><defs><polygon id="closeup24px-a" points="3.148 15.731 11.953 6.794 20.759 15.731 19.833 16.643 11.953 8.646 4.074 16.643" /></defs><g fill="none" fillRule="evenodd"><mask id="closeup24px-b" fill="#fff"><use xlinkHref="#closeup24px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#closeup24px-a" /><g fill="currentColor" mask="url(#closeup24px-b)"><rect width={24} height={24} /></g></g></svg>;
}

export default CloseUp24px;