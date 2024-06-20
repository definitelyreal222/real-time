import React from "react";
import Iframe from "react-iframe";
import { Col, Row } from "react-bootstrap";

const videos = [
  {
    title: "JAILTATE",
    id: "963123111",
  },
  {
    title: "ALIEN INVASION",
    id: "955745180",
  },
  {
    title: "INFLATION IS A SIN",
    id: "952614539",
  },
  {
    title: "JOIN THE ARMY OF THE DEAD",
    id: "950967171",
  },
  {
    title: "BUTT-PLUG IN YOUR EARS",
    id: "949767112",
  },
  {
    title: "WHAT IS A MEMECOIN",
    id: "949772170",
  },
  {
    title: "IT'S A DEATH CULT",
    id: "949771053",
  },
  {
    title: "DUMB MONEY",
    id: "949769170",
  },
  {
    title: "OLD MONEY NEW MONEY",
    id: "949770695",
  },
  {
    title: "UNRUGGABLE TOKENOMICS",
    id: "949772679",
  },
  {
    title: "ABSURD ALLEGATIONS",
    id: "949767985",
  },
  {
    title: "LOSERS AND DEGENERATES",
    id: "949771789",
  },
  {
    title: "OPEN SOURCE FOR THE WIN",
    id: "949770287",
  },
  {
    title: "LET DADDY MANAGE THIS",
    id: "949769610",
  },
  {
    title: "INFORMATION WANTS TO BE FREE",
    id: "954664489",
  },
];

const updates = [
  {
    title: "JUNE 17",
    id: "962299427",
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
              <Iframe
                url={
                  "https://player.vimeo.com/video/" +
                  video.id +
                  "?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                }
                width="100%"
                id={i}
                className=""
                display="block"
                position="relative"
              />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Videos;
