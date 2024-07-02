import React from "react";
import { Col, Row } from "react-bootstrap";

const videos = [
  {
    title: "LITTLE MISS SWIFTY",
    url: "https://youtube.com/embed/rWzMk_kZgXs",
  },
  {
    title: "JAILTATE",
    url: "https://youtube.com/embed/jsDQK7mdbKk",
  },
  {
    title: "ALIEN INVASION",
    url: "https://youtube.com/embed/lrqRq4HIVf0",
  },
  {
    title: "INFLATION IS A SIN",
    url: "https://youtube.com/embed/VcEWKwq08do",
  },
  {
    title: "ARMY OF THE DEAD",
    url: "https://youtube.com/embed/cBTG2kR4vsw",
  },
  {
    title: "BUTT-PLUG IN YOUR EARS",
    url: "https://youtube.com/embed/gdkF2bCtFvI",
  },
  {
    title: "WHAT IS A MEMECOIN",
    url: "https://youtube.com/embed/BWoOtyYGgCc",
  },
  {
    title: "IT'S A DEATH CULT",
    url: "https://youtube.com/embed/ibtCqKg16dc",
  },
  {
    title: "DUMB MONEY",
    url: "https://youtube.com/embed/EBV1slnh_jY",
  },
  {
    title: "OLD MONEY NEW MONEY",
    url: "https://youtube.com/embed/jAmF0-m0PnM",
  },
  {
    title: "UNRUGGABLE TOKENOMICS",
    url: "https://youtube.com/embed/21KUROh5yqc",
  },
  {
    title: "ABSURD ALLEGATIONS",
    url: "https://youtube.com/embed/fIcjQt5albg",
  },
  {
    title: "LOSERS AND DEGENERATES",
    url: "https://youtube.com/embed/rzo3t3h5fJk",
  },
  {
    title: "OPEN SOURCE FOR THE WIN",
    url: "https://youtube.com/embed/iYRrcNPOWMQ",
  },
  {
    title: "LET DADDY MANAGE THIS",
    url: "https://youtube.com/embed/ve5Yx9d4B-Y",
  },
  {
    title: "INFORMATION WANTS TO BE FREE",
    url: "https://youtube.com/embed/MnkG7b4Yp7Y",
  },
];

const updates = [
  {
    title: "JUNE 24",
    url: "https://youtube.com/embed/lJKe-PK3xf8"
  },
  {
    title: "JUNE 17",
    url: "https://youtube.com/embed/2JLUbwipA14",
  },
];

function Videos({ showUpdates }) {
  let vids;
  if (showUpdates) {
    vids = updates;
  } else {
    vids = videos;
  }
  return (
    <Row id="videos">
      {vids.map((video, i) => (
        <Col sm={12} md={6} lg={4} key={i} className="mb-4">
          <div className="video-container">
            <h2>{video.title}</h2>
            <div className="">
              <iframe class="rumble" width="100%" src={video.url}
                      frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Videos;
