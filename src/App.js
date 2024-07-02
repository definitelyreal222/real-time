import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import buy from "./img/buynow.png";
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
import rumble from "./img/rm.icon.png";

import footer from "./img/footer.png";
import bullet from "./img/icon.png";
import header from "./img/header.png";
import { useState, useEffect } from "react";
import WarningBanner from "./WarningBanner";
import Social from "./Social";
import BuyersGuide from "./BuyersGuide";
import AsSeenOn from "./AsSeenOn";
import SectionTitle from "./SectionTitle";
import Videos from "./Videos";

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
    <div>
      LIQUIDITY ADDED WITH 95% OF SUPPLY: {" "}
      <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://solscan.io/tx/3vDkP38yz1gxxX7cSA3A5U9ZymzC9LSGdwRam4EmjRLzbhC3YRe7GsSZWW5cxu5hWDZKMX2eJMW95rDeNbZM2YFP"
      >
        3vDkP38yz1gxxX7c...
      </a>
    </div>,
    <div>
      LIQUIDITY LOCKED: {" "}
      <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://solscan.io/tx/4WX9CSsJ85P66BWq86yhi7CaVZPvRFSPhk6RwCfrirkZXQjLPKhCWfCc982WjxrNcbF6iptizeGtpWAfvSuRG19W"
      >
        4WX9CSsJ85P66BWq...
      </a>
    </div>


  ];

  return (
      <div>
        <SectionTitle text="TOKENOMICS"/>
        <div className="list-container">
          <ul className={"t-list"}>
            {items.map((item, index) => (
                <li key={index}>
                  <img className={"bullet"} src={bullet} alt="Bullet"/>
                  <div className={"t-text"}> {item} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Roadmap() {
  const items = [
    <s>April: Token Launch</s>,
    <s>May: DEX Listings, CMC Listing, Twitter Partnerships</s>,
    "June: Deflationary Lottery Launch",
    "July: CEX Listing, Twitter Storm, Movie Release 🔥🚀",
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
      <SectionTitle text="SOCIALS" />
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
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const checkIfBlocked = async () => {
      try {
        const url = "https://rumble.com/v53my2c-dumb-money.html?mref=3qglap&mrefc=12";
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
        <Videos showUpdates={false} />
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
          <Roadmap />
          <SectionTitle text="UPDATES" />
          <Videos showUpdates={true} />
        </Row>
        <Row id="socials">
          <Socials />
        </Row>
        <Row>
          <img src={footer} width={"100%"} alt={"footer"} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
