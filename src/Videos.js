import React from "react";
import { Col, Row } from "react-bootstrap";

const videos = [
  {
    title: "LITTLE MISS SWIFTY",
    id: "v50iao4",
  },
  {
    title: "JAILTATE",
    id: "v50cbpd",
  },
  {
    title: "ALIEN INVASION",
    id: "v50p693",
  },
  {
    title: "INFLATION IS A SIN",
    id: "v522t5s",
  },
  {
    title: "ARMY OF THE DEAD",
    id: "v522wqe",
  },
  {
    title: "BUTT-PLUG IN YOUR EARS",
    id: "v522qvr",
  },
  {
    title: "WHAT IS A MEMECOIN",
    id: "v522xi9",
  },
  {
    title: "IT'S A DEATH CULT",
    id: "v522rhs",
  },
  {
    title: "DUMB MONEY",
    id: "v51apbl",
  },
  {
    title: "OLD MONEY NEW MONEY",
    id: "v522y6o",
  },
  {
    title: "UNRUGGABLE TOKENOMICS",
    id: "v522yl0",
  },
  {
    title: "ABSURD ALLEGATIONS",
    id: "v505a03",
  },
  {
    title: "LOSERS AND DEGENERATES",
    id: "v522ysk",
  },
  {
    title: "OPEN SOURCE FOR THE WIN",
    id: "v522z2r",
  },
  {
    title: "LET DADDY MANAGE THIS",
    id: "v522zbq",
  },
  {
    title: "INFORMATION WANTS TO BE FREE",
    id: "v522q3d",
  },
];

const updates = [
  {
    title: "JUNE 24",
    id: "v52313f"
  },
  {
    title: "JUNE 17",
    id: "v522zv9",
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
              <iframe class="rumble" width="100%" src={"https://rumble.com/embed/" + video.id + "/?pub=3qglap"}
                      frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Videos;
