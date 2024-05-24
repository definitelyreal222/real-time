import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import buy from "./img/buynow.png";
import icon from "./img/icon.png";
import roadmap from "./img/roadmap.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import xicon from "./img/x.icon.svg";
import tgicon from "./img/tg.icon.png";
import jupicon from "./img/jup.icon.svg";
import ghicon from "./img/gh.icon.svg";
import solicon from "./img/sol.icon.png";
import discord from "./img/dc.icon.png";
import footer from "./img/footer.png";
import bar from "./img/bar.png";
import bullet from "./img/icon.png";
import sidebar from "./img/sidebar.png";
import guideButton from "./img/howbuy.png";
import buyguide from "./img/guide.png";
import tokenomics from "./img/tokenomics.png";
import { useState } from "react";
import Iframe from "react-iframe";

const videos = [
  {
    title: "Butt-Plug In Your Ears",
    id: "949767112",
  },
  {
    title: "What Is A Memecoin",
    id: "949772170",
  },
  {
    title: "It's A Death Cult",
    id: "949771053",
  },
  {
    title: "Dumb Money",
    id: "949769170",
  },
  {
    title: "Old Money New Money",
    id: "949770695",
  },
  {
    title: "Unruggable Tokenomics",
    id: "949772679",
  },
  {
    title: "Absurd Allegations",
    id: "949767985",
  },
  {
    title: "Losers and Degenerates",
    id: "949771789",
  },
  {
    title: "Open Source For The Win",
    id: "949770287",
  },
  {
    title: "Let Daddy Manage This",
    id: "949769610",
  },
  {
    title: "Information Wants To Be Free",
    id: "949764461",
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
      <img src={buy} className="img-fluid" />
    </a>
  );
}

function BuyersGuide() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div
      className={"action-button"}
      style={{ alignItems: "center", display: "flex" }}
    >
      <img
        src={guideButton}
        className="img-fluid"
        onClick={openModal}
        // width={"72%"}
      />
      <PopoverModal isOpen={isModalOpen} onClose={closeModal}>
        <img src={buyguide} className="img-fluid" width={"100%"} />
      </PopoverModal>
    </div>
  );
}

function Tokenomics() {
  const items = [
    "Unruggable: 100% of initial liquidity locked",
    "Minimum Marketcap: 475 SOL",
    "World's First Deep Fake Memecoin",
    <div>
      Token address:{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://solscan.io/token/9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6"
      >
        9qywujQCJyECybwp...
      </a>
    </div>,
    <div>
      Pool address:{" "}
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
    <div>
      <img
        src={tokenomics}
        style={{ width: "50%", paddingTop: "40px", paddingBottom: "40px" }}
      />
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

const PopoverModal = ({ isOpen, children, onClose, position }) => {
  if (!isOpen) return null;

  const modalStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%", // Adjust width as necessary
    maxHeight: "80vh", // Adjust height as necessary
    overflow: "auto", // Enables scrolling
    zIndex: 1050,
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    border: "none",
    background: "#000000", // Vibrant color
    color: "white", // Contrasting text color
    padding: "8px 15px", // Larger clickable area
    borderRadius: "50%", // Circular button
    fontSize: "20px", // Larger font size
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)", // Adds depth
    outline: "none", // Removes focus border in some browsers
    zIndex: 1051,
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
      }}
      onClick={onClose}
    >
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

function Navigation() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={icon}
            alt="icon"
            width={"30"}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#videos">Videos</Nav.Link>
          <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
          <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          <Nav.Link href={buyUrl}>
            <a href={buyUrl} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <Container className="mt-5" fluid>
        <Row id="buynow">
          <h1 className="banner">
            <img src={icon} width={"200px"} /> DEADPOOL COIN{" "}
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
          {/*<img src={bar} width={"100%"} />*/}
          {/*<img src={tokenomics} width={"100%"} />*/}
          <Tokenomics />
        </Row>
        <Row id="roadmap">
          <img src={roadmap} width={"100%"} />
        </Row>
        <Row>
          <Col>
            <a
              href="https://twitter.com/thedeadpoolcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5"
            >
              <img src={xicon} width={"10%"} />
            </a>
            <a
              href="https://t.me/deadpoolcoinsol"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5"
            >
              <img src={tgicon} width={"10%"} />
            </a>
            <a
              href="https://discord.gg/vSfe2JY2"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5"
            >
              <img src={discord} width={"10%"} />
            </a>
            <a
              href="https://github.com/deadpoolcoin/website"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5"
            >
              <img src={ghicon} width={"10%"} />
            </a>
            <a
              href="https://jup.ag/swap/SOL-9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5"
            >
              <img src={jupicon} width={"10%"} />
            </a>
            <a
              href="https://solscan.io/token/9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5"
            >
              <img src={solicon} width={"10%"} />
            </a>
          </Col>
        </Row>
        <Row>
          <img src={footer} width={"100%"} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
