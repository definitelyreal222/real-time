import SectionTitle from "./SectionTitle";
import bullet from "./img/icon.svg";
import React from "react";

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

export default Roadmap