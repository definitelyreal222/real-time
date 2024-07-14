import React from 'react';
import {Col, Row} from "react-bootstrap";
import toke from "./img/tokenomics.png";
import Tokenomics from "./Tokenomics";

const FifthRow = () => {
    return (
        <Row className={"align-items-center"} id="tokenomics">
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                <Tokenomics />
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
                <img
                    src={toke}
                    alt="toke"
                    className="img-fluid"
                />
            </Col>
        </Row>
    )
}

export default FifthRow