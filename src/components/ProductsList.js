import React, { Component } from 'react';
import Col from 'reactstrap/lib/Col';
import { Row, Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faSearch } from '@fortawesome/free-solid-svg-icons'

const mapStateTOProps = state => {
    return{
        products : state.products
    }
}

class ProductsList extends Component {

    render(){
        const prodList = this.props.products.map((prod) => {
            return(
                <Col xs="3" key={prod.id}>
                    <Card className="mb-4 prodCard">
                        <Link to="/">
                            <CardImg top width="100%" src={prod.img} alt={prod.name} />
                            <CardBody>
                            <CardTitle className="font-weight-bold">{prod.name}</CardTitle>
                            <CardText>{prod.desc}</CardText>
                            <CardText>
                                <span className="newPrice"><FontAwesomeIcon icon={faRupeeSign} /> {prod.oldPrice} </span>
                                <span className="oldPrice"><FontAwesomeIcon icon={faRupeeSign} /> {prod.newPrice}</span>
                            </CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </Col> 
            )
        });

        return (
            <div className="container-fluid prodLists">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Shop</BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col xs="2">Filter Col</Col>
                    <Col xs="10">
                        <Row>{prodList}</Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(connect(mapStateTOProps)(ProductsList))