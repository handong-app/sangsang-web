import React, { useEffect } from "react";

function RedirectPage({ linkUrl }) {
  useEffect(() => {
    window.location.replace(linkUrl);
  });
  return (
    <div>
      새로고침 되지 않을 경우 아래 링크를 클릭해주세요!
      <br />
      <a href={linkUrl} rel="noopener noreferrer">
        {linkUrl}
      </a>
    </div>
  );
}

export default RedirectPage;
export const redirectHandler = (linkUrl) => <RedirectPage linkUrl={linkUrl} />;
