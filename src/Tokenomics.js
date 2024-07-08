import SectionTitle from "./SectionTitle";
import bullet from "./img/icon.svg";

const Tokenomics = () => {
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

export default Tokenomics;
