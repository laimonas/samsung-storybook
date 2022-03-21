import * as React from "react";

function Plus16px(props: React.SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16px 16px" {...props}><defs><path id="plus16px-a" d="M8.55,1.33333333 L8.54933333,7.44933333 L14.6666667,7.45 L14.6666667,8.55 L8.54933333,8.54933333 L8.55,14.6666667 L7.45,14.6666667 L7.44933333,8.54933333 L1.33333333,8.55 L1.33333333,7.45 L7.44933333,7.44933333 L7.45,1.33333333 L8.55,1.33333333 Z" /></defs><g fill="none" fillRule="evenodd"><mask id="plus16px-b" fill="#fff"><use xlinkHref="#plus16px-a" /></mask><use fill="currentColor" fillRule="nonzero" xlinkHref="#plus16px-a" /><g fill="currentColor" mask="url(#plus16px-b)"><rect width={16} height={16} /></g></g></svg>;
}

export default Plus16px;