import React, { Component } from 'react';
import Col from 'reactstrap/lib/Col';
import { Row, Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Control, LocalForm } from 'react-redux-form'


const mapStateTOProps = state => {
    return{
        products : state.products
    }
}

class ProductsList extends Component {
    render(){
        const prodList = this.props.products.map((prod) => {
            var paramID = this.props.match.params.id;
            if(prod.type === paramID || prod.gender === paramID){
                return(
                    <Col md="3" xs="6" key={prod.id} className={(prod.id%2 ? 'mpr-1' : 'mpl-1')}>
                        <Card className="mb-4 mmb-4 prodCard">
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
            }
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
                    <Col md="2">Filter Col</Col>
                    <Col md="10">
                        <Row className="mb-2">
                            <Col md="9" className="shoesHeading">{this.props.match.params.id} Shoes</Col>
                            <Col md="3">
                                <LocalForm>
                                    <Control.select 
                                        name="filterProducts"
                                        model=".filterProducts"
                                        className="form-control"
                                    >
                                        <option value="Relevance">Relevance</option>
                                        <option value="Popular">Popular</option>
                                    </Control.select>
                                </LocalForm>
                            </Col>
                        </Row>
                        <Row>{prodList}</Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(connect(mapStateTOProps)(ProductsList))