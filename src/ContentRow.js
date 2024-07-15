import React from 'react';
import {Col, Row} from "react-bootstrap";


const ContentRow = ({ videoSrc, imageSrc, isReversed }) => (
    <Row className={`align-items-center content-row ${isReversed ? 'reversed' : ''}`}>
        <Col xs={12} md={6} className="d-flex align-items-center video-col">
            <div className="video-wrapper w-100 pb-3">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </Col>
        <Col xs={12} md={6} className="mb-3 mb-md-0 image-col">
            <img
                src={imageSrc}
                alt={'image'}
                className="img-fluid"
            />
        </Col>
    </Row>
);

export default ContentRow;