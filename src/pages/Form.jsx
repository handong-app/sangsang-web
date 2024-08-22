import React, { useEffect } from "react";

const linkUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScoN19fAklBenQlIPES3KYiInuK26iAkyHka6iPTnPdFRKwlQ/viewform?usp=sf_link";

function Form() {
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

export default Form;
