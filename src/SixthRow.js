import React from 'react';
import {Col, Row} from "react-bootstrap";
import scope from "./img/cash-gun.png";
import Roadmap from "./Roadmap";

const SixthRow = () => {
    return (
        <Row className={"align-items-center"} id="roadmap" >
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                <Roadmap />
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
                <img
                    src={scope}
                    alt="scope"
                    className="img-fluid"
                />
            </Col>
        </Row>
    )
}

export default SixthRow