import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import buy from "./img/buy.png";
import icon from "./img/icon.png";
import roadmap from "./img/roadmap.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import meme1 from "./img/meme01.png";
import meme2 from "./img/meme02.png";
import meme3 from "./img/meme03.png";
import meme4 from "./img/meme04.png";
import meme5 from "./img/meme05.png";
import meme6 from "./img/meme06.png";
import meme7 from "./img/meme07.png";
import meme8 from "./img/meme08.png";
import meme9 from "./img/meme09.png";
import xicon from "./img/x.icon.svg";
import tgicon from "./img/tg.icon.png";
import jupicon from "./img/jup.icon.svg";
import ghicon from "./img/gh.icon.svg";
import solicon from "./img/sol.icon.png";
import vidya from "./video/dp.mp4";
import footer from "./img/footer.png";
import bar from "./img/bar.png";
import bullet from "./img/icon.png"
import sidebar from "./img/sidebar.png"
import guideButton from "./img/guidebutton.png"
import buyguide from "./img/guide.png"
import tokenomics from "./img/tokenomics.png"
import {useState} from "react";

const memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9];

function BuyVideo() {
  return (
    <video width={"70%"} controls>
      <source src={vidya} type="video/mp4" />
    </video>
  );
}

const buyUrl =
  "https://jup.ag/swap/SOL-9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6";

function BuyButton() {
  return (
    <a className={"action-button"} href={buyUrl} target="_blank" rel="noopener noreferrer">
      <img src={buy} className="img-fluid" />
    </a>
  );
}

function BuyersGuide() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <div className={"action-button"} style={{alignItems: 'center', display: 'flex'}}>
            <img
                src={guideButton}
                className="img-fluid"
                onClick={openModal}
                width={"72%"}
            />
            <PopoverModal isOpen={isModalOpen} onClose={closeModal}>
                <img src={buyguide} className="img-fluid" width={"100%"} />
            </PopoverModal>
        </div>

        )
}

function Tokenomics() {
  const items = [
    "100% of initial liquidity burned if MC > $1m",
    "Minimum price 0.000000475 SOL",
    "Unruggable Memecoin",
    <div>Token address: <a target="_blank" rel="noopener noreferrer" href="https://solscan.io/token/9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6">9qywujQCJyECybwp...</a></div>,
    <div>Pool address: <a target="_blank" rel="noopener noreferrer" href="https://solscan.io/account/4a9CgJE7vGeMGTBUP48B13tsec9azkZFHGFGYUv36wvZ">4a9CgJE7vGeMGTB...</a></div>
  ];

  return (
      <div>
          <img src={tokenomics} style={{width: '50%', paddingTop: '40px', paddingBottom: '40px'}} />
          <div className="list-container">
              <ul className={"t-list"} >
                  {items.map((item, index) => (
                      <li key={index} >
                          <img className={"bullet"} src={bullet} alt="Bullet"  />
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
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        background: 'white',
        borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '80%',  // Adjust width as necessary
        maxHeight: '80vh',  // Adjust height as necessary
        overflow: 'auto',  // Enables scrolling
        zIndex: 1050
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        border: 'none',
        background: '#000000', // Vibrant color
        color: 'white', // Contrasting text color
        padding: '8px 15px', // Larger clickable area
        borderRadius: '50%', // Circular button
        fontSize: '20px', // Larger font size
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)', // Adds depth
        outline: 'none', // Removes focus border in some browsers
        zIndex: 1051
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1050
        }} onClick={onClose}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
                <button style={closeButtonStyle} onClick={onClose}>X</button>
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
          <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
          <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          <Nav.Link href="#memepack">Meme Pack</Nav.Link>
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
              <BuyVideo />
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
            <Row id="memepack">
              <h1>Meme Pack</h1>
              {memes.map((img, i) => (
                <Col sm={12} md={6} lg={4} key={i} className="mb-4">
                  <img src={img} className="img-fluid" />
                </Col>
              ))}
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
                  href="https://github.com/deadpoolcoin/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-5"
                >
                  <img src={ghicon} width={"10%"} />
                </a>
                {/*<a*/}
                {/*  href="https://twitter.com/thedeadpoolcoin"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*  className="m-5"*/}
                {/*>*/}
                {/*  <img src={tgicon} width={"10%"} />*/}
                {/*</a>*/}
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
