import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import buy from "./img/buynow.png";
import icon from "./img/icon.png";
import roadmap from "./img/roadmap.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

import xicon from "./img/x.icon.svg";
import tgicon from "./img/tg.icon.png";
import yticon from "./img/yt.icon.png";
import jupicon from "./img/jup.icon.svg";
import ghicon from "./img/gh.icon.svg";
import solicon from "./img/sol.icon.png";
import discord from "./img/dc.icon.png";
import dextools from "./img/dt.icon.png";
import dexscreener from "./img/ds.icon.jpeg";
import minds from "./img/minds.icon.png";
import cmc from "./img/cmc.icon.svg";

import footer from "./img/footer.png";
import bullet from "./img/icon.png";
import header from "./img/header.png";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
import WarningBanner from "./WarningBanner";
import Social from "./Social";
import BuyersGuide from "./BuyersGuide";
import AsSeenOn from "./AsSeenOn";

const videos = [
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
    id: "949764461",
  },
];

const socials = [
  {
    url: "https://twitter.com/deadpoolcash",
    icon: xicon,
  },
  {
    url: "https://t.me/deadpoolcoinsol",
    icon: tgicon,
  },
  {
    url: "https://discord.gg/FdcxE6wYq6",
    icon: discord,
  },
  {
    url: "https://github.com/deadpoolcoin/website",
    icon: ghicon,
  },
  {
    url: "https://jup.ag/swap/SOL-9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6",
    icon: jupicon,
  },
  {
    url: "https://solscan.io/token/9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6",
    icon: solicon,
  },
  {
    url: "https://www.dextools.io/app/en/solana/pair-explorer/4a9CgJE7vGeMGTBUP48B13tsec9azkZFHGFGYUv36wvZ",
    icon: dextools,
  },
  {
    url: "https://dexscreener.com/solana/4a9cgje7vgemgtbup48b13tsec9azkzfhgfgyuv36wvz",
    icon: dexscreener,
  },
  {
    url: "https://www.minds.com/deadpoolcoin/",
    icon: minds,
  },
  {
    url: "https://www.youtube.com/channel/UCAlUGf1ihNHn10x2uT9oqKg",
    icon: yticon,
  },
  {
    url: "https://coinmarketcap.com/currencies/deadpool/",
    icon: cmc,
  },
];

const buyUrl =
  "https://jup.ag/swap/SOL-9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6";

function BuyButton() {
  return (
    <a
      className={"action-button"}
      href={buyUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={buy} className="img-fluid" alt={"buy"} />
    </a>
  );
}

function Tokenomics() {
  const items = [
    "UNRUGGABLE: 100% OF INITIAL LIQUIDITY LOCKED",
    "MINIMUM MARKETCAP: 475 SOL",
    "WORLD'S FIRST DEEP FAKE MEMECOIN",
    <div>
      TOKEN ADDRESS:{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://solscan.io/token/9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6"
      >
        9qywujQCJyECybwp...
      </a>
    </div>,
    <div>
      POOL ADDRESS:{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://solscan.io/account/4a9CgJE7vGeMGTBUP48B13tsec9azkZFHGFGYUv36wvZ"
      >
        4a9CgJE7vGeMGTB...
      </a>
    </div>,
  ];

  return (
    <div className={"tokenomics"}>
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
      TOKENOMICS
      <div className="list-container">
        <ul className={"t-list"}>
          {items.map((item, index) => (
            <li key={index}>
              <img className={"bullet"} src={bullet} alt="Bullet" />
              <div className={"t-text"}> {item} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="top">
      <Nav>
        <Nav.Link href="#videos">VIDEOS</Nav.Link>
        <Nav.Link href="#tokenomics">TOKENOMICS</Nav.Link>
        <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
        <Nav.Link href="#socials">SOCIALS</Nav.Link>
        <Nav.Link href={buyUrl}>
          <a href={buyUrl} target="_blank" rel="noopener noreferrer">
            BUY
          </a>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

function App() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const checkIfBlocked = async () => {
      try {
        const url = "https://player.vimeo.com/video/" + videos[0].id;
        console.log({ url });
        const response = await fetch(url, {
          mode: "no-cors",
        });
        if (response.status === 0) {
          setIsBlocked(false);
        } else {
          setIsBlocked(true);
        }
      } catch (error) {
        console.error({ error });
        setIsBlocked(true);
      }
    };
    checkIfBlocked();
  }, []);

  return (
    <div className="App" id="home">
      <Navigation />
      <Container fluid>
        {isBlocked ? <WarningBanner /> : null}
        <Row id="buynow">
          <h1 className="banner">
            <img src={header} width={"100%"} alt={"header"} />
          </h1>
        </Row>
        <Row id="videos">
          {videos.map((video, i) => (
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
                    // height="100%"
                    id={i}
                    className=""
                    display="block"
                    position="relative"
                    styles={
                      {
                        // border: "1px solid #ccc",
                        // borderRadius: "5px",
                        // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      }
                    }
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row id="buynow">
          <div className={"button-box"}>
            <BuyButton />
            <BuyersGuide />
          </div>
        </Row>
        <Row id="tokenomics">
          <Tokenomics />
        </Row>
        <Row id="asSeenOn">
          <AsSeenOn />
        </Row>
        <Row id="roadmap">
          <img src={roadmap} width={"100%"} alt={"roadmap"} />
        </Row>
        <Row id="socials">
          <Col>
            {socials.map((social, i) => (
              <Social key={i} obj={social} />
            ))}
          </Col>
        </Row>
        <Row>
          <img src={footer} width={"100%"} alt={"footer"} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
