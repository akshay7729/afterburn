import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MobileCards = () => {
    return(
        <Container>
            <Container className="pl-0 pt-2 pb-2 overflowXauto mobileCards">
                <Row className="flex-nowrap">
                    <Col xs="10">
                        <div className="mobileCardBox">
                            <img src="/assests/images/shoes/mobileCards/mc1.jpg" className="w-100"/>
                        </div>
                    </Col>
                    <Col xs="10">
                        <div className="mobileCardBox">
                            <img src="/assests/images/shoes/mobileCards/mc2.jpg" className="w-100"/>
                        </div>
                    </Col>
                    <Col xs="10">
                        <div className="mobileCardBox">
                            <img src="/assests/images/shoes/mobileCards/mc2.jpg" className="w-100"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MobileCards;