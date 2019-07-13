import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import Col from 'reactstrap/lib/Col';

class Categories extends Component{

    render(){
        const cat = this.props.categories.map((category) => {
            return(
                <div className="col-md-3 catsCol" key={category.id}>
                    <Card className="catCard">
                        <CardImg src={category.img} alt={category.name} className="catCardImg"></CardImg>
                        <CardBody>
                            <CardTitle>{category.name}</CardTitle>
                            <CardText>{category.desc}</CardText>
                            <Button className="w-100 catCardBrowse">
                                <Link 
                                    to={{
                                        pathname : '/shoes/' + category.type
                                    }} 
                                    className="nav-link"
                                >
                                    shop
                                </Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="menWomenBanner pb-4">
                    <Row>
                        <Col md="6">
                            <Link to='shoes/men'>
                            <div className="menBanner banner">
                                <Card>
                                    <CardImg top width="100%" src="assests/images/shoes/banners/men.jpg" alt="Men Shoes" />
                                    <CardBody className="position-absolute w-100">
                                        <CardTitle className="text-center font-weight-bold mt-2 pt-1 pb-1">Men Shoes</CardTitle>
                                    </CardBody>
                                </Card>
                            </div>
                            </Link>
                        </Col>
                        <Col md="6">
                            <Link to='shoes/women'>
                                <div className="womenBanner banner">
                                    <Card>
                                        <CardImg top width="100%" src="assests/images/shoes/banners/women.jpg" alt="Women Shoes" />
                                        <CardBody className="position-absolute w-100">
                                            <CardTitle className="text-center font-weight-bold mt-2 pt-1 pb-1">Women Shoes</CardTitle>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <h2 className="catHeader pb-4">Recommended for you</h2>
                <div className="cats">
                    <div className="row">{cat}</div>
                </div>
            </div>
        )
    }
}

export default Categories