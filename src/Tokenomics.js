import SectionTitle from "./SectionTitle";
import bullet from "./img/icon.svg";
import React, { useState } from 'react';

const Tokenomics = () => {
    const [copySuccess, setCopySuccess] = useState('Copy');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(
            () => {
                setCopySuccess('Copied!');
                setTimeout(() => {
                    setCopySuccess('Copy');
                }, 3000)
            },
            (err) => {
                setCopySuccess('Failed to copy!');
            }
        );
    };

    const items = [
        <div>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://solscan.io/token/4svcM61MrzU2LNtKWF5PB7r5FAgHy2cgiYYxeP9wWrXS"
            >
                UNRUGGABLE : DEEP LIQUIDITY BURNED
            </a>
        </div>,
        "BUY / SELL TAX : 0%",
        "TOKEN SUPPLY : 1B",
        <div style={{alignItems:'center', display:'flex'}}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://solscan.io/token/9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6"
            >
                CONTRACT ADDRESS
            </a>
            <button className={"copy-button"} onClick={() => copyToClipboard('9qywujQCJyECybwpNsM4YTBRnakjDS23MdJHGRYVeLm6')}>
                {copySuccess}
            </button>
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
