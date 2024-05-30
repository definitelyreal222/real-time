import React from "react";

const Social = (obj) => {
  console.log({ obj });
  const { url, icon } = obj.obj;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="m-5">
      <img className="social-image" src={icon} width={"10%"} />
    </a>
  );
};

export default Social;
