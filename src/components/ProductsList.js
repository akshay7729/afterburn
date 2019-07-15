import React, { Component } from 'react';
import Col from 'reactstrap/lib/Col';
import { Row, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Control, LocalForm } from 'react-redux-form'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';


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
                    <Col md="3" xs="6" key={prod.id} className={(prod.id%2 ? 'mpr-0' : 'mpl-0')}>
                        <Card className={(prod.id%2 ? "mb-4 mmb-4 prodCard mbr-0" : "mb-4 mmb-4 prodCard")}>
                            <Link to={{
                                pathname : '/buyShoes/' + prod.id
                            }}>
                                <ResponsiveImage className="prodImgResBox">
                                    <ResponsiveImageSize
                                        default
                                        minWidth={0}
                                        path={prod.img}
                                    />
                                    <ResponsiveImageSize
                                        default
                                        minWidth={480}
                                        path={prod.img}
                                    />
                                    <ResponsiveImageSize
                                        minWidth={768}
                                        path={prod.img}
                                    />
                                    <ResponsiveImageSize
                                        minWidth={1100}
                                        path={prod.img}
                                    />
                                </ResponsiveImage>
                                {/* <img top width="100%" className="card-img-top" src={prod.img} alt={prod.name} /> */}
                                <CardBody>
                                <CardTitle className="font-weight-bold productTitle">{prod.name}</CardTitle>
                                <CardText className="productDesc">{prod.desc}</CardText>
                                <CardText className="productPrice">
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