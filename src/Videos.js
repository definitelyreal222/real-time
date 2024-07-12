import React from "react";
import YouTubeEmbed from "react-youtube-embed";
import { Col, Row } from "react-bootstrap";

const trolls = [
  {
    title: "KING OF THE MARVEL INCELS",
    url: "https://youtube.com/embed/j5kAGGv0zz0",
    id: "j5kAGGv0zz0"
  },
  {
    title: "LITTLE MISS SWIFTY",
    url: "https://youtube.com/embed/rWzMk_kZgXs",
    id: "rWzMk_kZgXs"
  },
  {
    title: "JAILTATE",
    url: "https://youtube.com/embed/jsDQK7mdbKk",
    id: "jsDQK7mdbKk"
  },
  {
    title: "INFLATION IS A SIN",
    url: "https://youtube.com/embed/VcEWKwq08do",
    id: "VcEWKwq08do"
  },
  {
    title: "ARMY OF THE DEAD",
    url: "https://youtube.com/embed/cBTG2kR4vsw",
    id: "cBTG2kR4vsw"
  },
  {
    title: "BUTT-PLUG IN YOUR EARS",
    url: "https://youtube.com/embed/gdkF2bCtFvI",
    id: "gdkF2bCtFvI"
  },
  {
    title: "WHAT IS A MEMECOIN",
    url: "https://youtube.com/embed/BWoOtyYGgCc",
    id: "BWoOtyYGgCc"
  },
  {
    title: "IT'S A DEATH CULT",
    url: "https://youtube.com/embed/ibtCqKg16dc",
    id: "ibtCqKg16dc"
  },
  {
    title: "OLD MONEY NEW MONEY",
    url: "https://youtube.com/embed/jAmF0-m0PnM",
    id: "jAmF0-m0PnM"
  },
  {
    title: "UNRUGGABLE TOKENOMICS",
    url: "https://youtube.com/embed/21KUROh5yqc",
    id: "21KUROh5yqc"
  },
  {
    title: "LOSERS AND DEGENERATES",
    url: "https://youtube.com/embed/rzo3t3h5fJk",
    id: "rzo3t3h5fJk"
  },
  {
    title: "OPEN SOURCE FOR THE WIN",
    url: "https://youtube.com/embed/iYRrcNPOWMQ",
    id: "iYRrcNPOWMQ"
  },
  {
    title: "LET DADDY MANAGE THIS",
    url: "https://youtube.com/embed/ve5Yx9d4B-Y",
    id: "ve5Yx9d4B-Y"
  },
  // {
  //   title: "INFORMATION WANTS TO BE FREE",
  //   url: "https://youtube.com/embed/MnkG7b4Yp7Y",
  //   id: "MnkG7b4Yp7Y"
  // },
];

const highlights = [
  {
    title: "ABSURD ALLEGATIONS",
    url: "https://youtube.com/embed/fIcjQt5albg",
    id: "fIcjQt5albg"
  },
  {
    title: "ALIEN INVASION",
    url: "https://youtube.com/embed/lrqRq4HIVf0",
    id: "lrqRq4HIVf0"
  },
  {
    title: "DUMB MONEY",
    url: "https://youtube.com/embed/EBV1slnh_jY",
    id: "EBV1slnh_jY"
  },
]

const updates = [
  {
    title: "JUNE 24",
    url: "https://youtube.com/embed/lJKe-PK3xf8",
    id: "lJKe-PK3xf8"
  },
  {
    title: "JUNE 17",
    url: "https://youtube.com/embed/2JLUbwipA14",
    id: "2JLUbwipA14"
  },
];

const media = [
  {
    title: "",
    url: "",
    id: "KBV0ELCiNZw",
  },
  {
    title: "",
    url: "",
    id: "5CxSFuzw3hI",
  },
  {
    title: "",
    url: "",
    id: "7BhXINkUeh8",
  },
  {
    title: "",
    url: "",
    id: "aJ42fI2dDI4",
  },
]

export function Headliner() {
  return (
      <div className="as-seen-on-video">
        <h1 style={{marginBottom: '45px'}}>THE ORIGINAL DEEP FAKE MEMECOIN</h1>
        {/*<h2>{'INFORMATION WANTS TO BE FREE'}</h2>*/}
        <YouTubeEmbed id={'MnkG7b4Yp7Y'}/>
      </div>
  )
}

export function Videos({type}) {
  let vids;
  let lg = 4
  switch (type) {
    case 'media':
      vids = media;
      lg = 3
      break;
    case 'updates':
      vids = updates;
      break;
    case 'trolls':
      vids = trolls;
      break;
    case 'highlights':
      vids = highlights;
      break;
    default:
      console.error("Unknown video type: ", type)
  }

  return (
    <Row id={type === 'trolls' ? 'videos' : ''}>
      {vids.map((video, i) => (
        <Col sm={12} md={6} lg={lg} key={i} className="mb-4">
          <div className="video-container">
            <h2>{video.title}</h2>
            <div className="">
              <YouTubeEmbed id={video.id} />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
