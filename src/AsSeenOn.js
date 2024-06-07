import React from "react";
import YouTubeEmbed from "react-youtube-embed";
import SectionTitle from "./SectionTitle";

const videoIds = ["KBV0ELCiNZw", "5CxSFuzw3hI", "7BhXINkUeh8", "aJ42fI2dDI4"];

const AsSeenOn = () => {
  return (
    <div className="as-seen-on">
      <SectionTitle text="AS SEEN ON" />
      <div>
        {videoIds.map((id, i) => (
          <div className="as-seen-on-video">
            {/* <ReactPlayer url={url} controls={true} /> */}
            <YouTubeEmbed id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsSeenOn;
