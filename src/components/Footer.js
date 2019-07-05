import React, { Component } from 'react';
import { Row } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer pt-5 mt-5 pb-5">
                <Row className="justify-content-center">
                    <p>This is a dummy website. Data may be irrelevant </p>
                </Row>
                <Row className="justify-content-center">
                    <p>For more information email @ akshay.khobragade7875@gmail.com</p>
                </Row>
            </div>
        );
    }
}

export default Footer;