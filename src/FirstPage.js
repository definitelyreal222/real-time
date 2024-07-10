import React from 'react';
import ComicPage from "./ComicPage";
import Panel from "./Panel";
import comicHeader from "./img/comic-header.png";

const FirstPage = () => {
    return (
        <ComicPage>
            <div className="row">
                <Panel size="wide" height={'10px'} backgroundImage={comicHeader}>
                    Panel 1
                </Panel>
            </div>
            <div className="row">
                <Panel size="large">Panel 1</Panel>
                <Panel size="large">Panel 2</Panel>
            </div>
            <div className="row">
                <Panel size="medium">Panel 3</Panel>
                <Panel size="medium">Panel 4</Panel>
                <Panel size="medium">Panel 5</Panel>
            </div>
            <div className="row">
                <Panel size="wide">Panel 6</Panel>
            </div>
        </ComicPage>
    );
}

export default FirstPage;