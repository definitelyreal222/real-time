import React from "react";
import YouTubeEmbed from "react-youtube-embed";

import icon from "./img/icon.png";

const videoIds = ["KBV0ELCiNZw", "5CxSFuzw3hI", "7BhXINkUeh8", "aJ42fI2dDI4"];

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
        {videoIds.map((id, i) => (
          <div>
            {/* <ReactPlayer url={url} controls={true} /> */}
            <YouTubeEmbed id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsSeenOn;
