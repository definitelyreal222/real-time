import React from "react";
import icon from "./img/icon.png";

const SectionTitle = ({ text }) => {
  return (
    <div className={"section-title"}>
      <img src={icon} alt={text} />
      {text}
    </div>
  );
};

export default SectionTitle;
