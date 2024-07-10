import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import buy from "./img/buynow.png";
import arcade from "./img/arcade.png";
import comicHeader from './img/comic-header.png';
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
import Tokenomics from "./Tokenomics";
import ComicPage from "./ComicPage";
import Panel from './Panel';
import React from "react";
import FirstPage from "./FirstPage";

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

function Roadmap() {
  const items = [
    <s>April: Token Launch</s>,
    <s>May: DEX Listings, CMC Listing, Twitter Partnerships</s>,
    <s>July: Arcade Launch 🃏♦️♣️♥️♠️🎲 </s>,
    "July: Twitter Storm, Movie Release 🔥🚀",
    "Nov: US Election, Deadpool for President!",
  ];

  return (
    <div>
      <SectionTitle text="ROADMAP" />
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
    <Navbar bg="black" variant="dark" expand="lg" fixed="top">
      <Nav>
        <Nav.Link href="#videos">VIDEOS</Nav.Link>
        <Nav.Link href="#tokenomics">TOKENOMICS</Nav.Link>
        <Nav.Link href="#asSeenOn">MEDIA</Nav.Link>
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
  return (
    <div className="App" id="home">
      {/*<FirstPage />*/}
      <Navigation/>
      <Container className={"comic-section"} fluid>
        <Row>
          <h1 className="banner">
            <img src={animation} width={"100%"} alt={"animation"}/>
          </h1>
        </Row>

        <Row id="buynow">
          <h1 className="banner">
            <img src={header} width={"100%"} alt={"header"}/>
          </h1>
        </Row>
        <Headliner/>
        <img src={bar} width={"100%"} className={'bar'} alt={"bar"}/>
        <Videos type={'highlights'}/>
        <img src={bar} width={"100%"} className={'bar'} alt={"bar"}/>
        <Videos type='trolls'/>
        <Row id="buynow">
          <div className={"button-box"}>
            <BuyButton/>
            <BuyersGuide/>
            <ArcadeLink/>
          </div>
        </Row>
        <Row id="tokenomics">
          <Tokenomics/>
        </Row>
        <Row id="asSeenOn">
          <SectionTitle text="MEDIA"/>
          <Videos type={'media'}/>
        </Row>
        <Row id="roadmap">
          <Roadmap/>
          {/*<SectionTitle text="UPDATES"/>*/}
          {/*<Videos type={'updates'}/>*/}
        </Row>
        <Row id="socials">
          <Socials/>
        </Row>
        <Row>
          <img src={footer} width={"100%"} alt={"footer"}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
