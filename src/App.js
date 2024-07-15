import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import buy from "./img/buynow.png";
import arcade from "./img/arcade.png";
import bar from "./img/bar.png";
import animation from './img/animation.gif';
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
import ig from "./img/ig.icon.png";
import lt from "./img/lt.icon.svg";
import tt from "./img/tt.icon.jpeg";
import reddit from "./img/rd.icon.svg";

import footer from "./img/footer.png";
import bullet from "./img/icon.svg";
import header from "./img/header.png";
import Social from "./Social";
import BuyersGuide from "./BuyersGuide";
import SectionTitle from "./SectionTitle";
import {Videos, Headliner} from "./Videos";
import React from "react";
import FirstRow from './FirstRow'
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from './FifthRow';
import SixthRow from './SixthRow';
import ContentRow from "./ContentRow";
import grenade from "./img/grenade.png";
import circleGun from "./img/circle-gun.png";
import whale from "./img/whale.png";
import mil from "./img/mil.png";

const socials = [
  {
    url: "https://twitter.com/deadpoolcash",
    icon: xicon,
  },
  {
    url: "https://t.me/deadpoolcoinsol",
    icon: tgicon,
  },
  // {
  //   url: "https://discord.gg/FdcxE6wYq6",
  //   icon: discord,
  // },
  {
    url: "https://github.com/deadpoolcash/website",
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
  {
    url: "https://www.tiktok.com/@deadpool.cash",
    icon: tt,
  },
  {
    url: "https://linktr.ee/deadpoolcash",
    icon: lt,
  },
  {
    url: "https://www.instagram.com/deadpool.cash",
    icon: ig,
  },
  {
    url: "https://www.reddit.com/r/DeadpoolCash",
    icon: reddit,
  },
  // {
  //   url: "https://rumble.com/c/c-6448323",
  //   icon: rumble,
  // },
];

const buyUrl =
  "https://jup.ag/swap/SOL-9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6";
const arcadeUrl = "https://arcade.deadpool.cash";

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

function ArcadeLink() {
  return (
      <div
          className={"action-button"}
          style={{ alignItems: "center", display: "flex" }}
      >
        <a
            className={"action-button"}
            href={arcadeUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
          <img src={arcade} className="img-fluid" alt={"arcade"} />
        </a>
      </div>
  );
}

function Socials() {
  return (
    <div>
      <SectionTitle text="JOIN THE ARMY OF THE DEAD" />
      <Col>
        {socials.map((social, i) => (
          <Social key={i} obj={social} />
        ))}
      </Col>
    </div>
  );
}

function Navigation() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className={""} > {/* fixed="top" */}
      <Nav>
        <Nav.Link href="#tokenomics">TOKENOMICS</Nav.Link>
        <Nav.Link href="#asSeenOn">MEDIA</Nav.Link>
        <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
        <Nav.Link href="#socials">SOCIALS</Nav.Link>
        <Nav.Link href="#videos">VIDEOS</Nav.Link>
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
  return (
      <div className="App" id="home">
        <Navigation/>
        <div className={"banner"}>
          <img src={header} className={"banner-image"} alt={"header"}/>
        </div>
        <Container fluid className={"p-0"}>
          <div className="header-container">
            <div className="header-background">
              <Row id="buynow">
                <div className={"button-box"}>
                  <BuyButton/>
                  <BuyersGuide/>
                  <ArcadeLink/>
                </div>
              </Row>
            </div>
          </div>
          <ContentRow
              videoSrc={"https://www.youtube.com/embed/MnkG7b4Yp7Y"}
              imageSrc={grenade}
              isReversed={false}
          />
          <ContentRow
              videoSrc={"https://www.youtube.com/embed/fIcjQt5albg"}
              imageSrc={circleGun}
              isReversed={true}
          />
          <ContentRow
              videoSrc={"https://www.youtube.com/embed/lrqRq4HIVf0"}
              imageSrc={whale}
              isReversed={false}
          />
          <ContentRow
              videoSrc={"https://www.youtube.com/embed/EBV1slnh_jY"}
              imageSrc={mil}
              isReversed={true}
          />

          <FifthRow/>
          <img src={animation} width={"100%"} alt={"animation"}/>
          <Row id="asSeenOn">
            <SectionTitle text="MEDIA"/>
            <Videos type={'media'}/>
          </Row>
          <SixthRow/>
          <Row id="socials">
            <Socials/>
          </Row>
          <Row>
            <img src={footer} width={"100%"} alt={"footer"}/>
          </Row>
          <Videos type='trolls'/>

        </Container>
      </div>
  );
}

export default App;
