import React from 'react';
import {Col, Row} from "react-bootstrap";
import whale from "./img/whale.png";

const ThirdRow = () => {
    return (
        <Row className={"align-items-center"}>
            <Col xs={12} md={6} className="d-flex align-items-center">
                <div className="video-wrapper w-100">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/lrqRq4HIVf0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0">
                <img
                    src={whale}
                    alt="catch"
                    className="img-fluid"
                />
            </Col>
        </Row>
    )
}

export default ThirdRow