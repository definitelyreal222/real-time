import React from 'react';
import {Col, Row} from "react-bootstrap";
import sound from "./img/sound.png";
import Roadmap from "./Roadmap";

const SixthRow = () => {
    return (
        <Row className={"align-items-center"}>
            <Col xs={12} md={6} className="d-flex align-items-center">
                <Roadmap />
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
                <img
                    src={sound}
                    alt="word"
                    className="img-fluid"
                />
            </Col>
        </Row>
    )
}

export default SixthRow