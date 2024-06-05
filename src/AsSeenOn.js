import React from "react";
import ReactPlayer from "react-player";
import icon from "./img/icon.png";

const urls = [
  "https://www.youtube.com/watch?v=KBV0ELCiNZw",
  "https://www.youtube.com/watch?v=5CxSFuzw3hI",
  "https://www.youtube.com/watch?v=7BhXINkUeh8",
  "https://www.youtube.com/watch?v=aJ42fI2dDI4",
];

const AsSeenOn = () => {
  return (
    <div className="as-seen-on">
      <img
        src={icon}
        style={{
          width: "10%",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingRight: "20px",
        }}
        alt={"tokenomics"}
      />
      AS SEEN ON
      <div className="as-seen-on-videos">
        {urls.map((url, i) => (
          <ReactPlayer url={url} controls={true} />
        ))}
      </div>
    </div>
  );
};

export default AsSeenOn;
