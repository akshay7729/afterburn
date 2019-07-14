import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, Card, CardImg, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faTag, faShoppingBag, faBookmark } from '@fortawesome/free-solid-svg-icons'

const mapStateTOProps = state => {
    return{
        products : state.products
    }
}

class Pdp extends Component {
    render() {
        console.log(this.props)
        const pdpVal = this.props.products.map((pdp) => {
            if(this.props.match.params.id == pdp.id){
                return(
                    <Row key={pdp.id}>
                        <Col md="5" className="pdpInner">
                            <div className="pdpInnerData">
                                <Card className="pdpProdImg">
                                    <CardImg top width="100%" src={pdp.pdpDeatils.pdpImg0} alt="hello" />
                                </Card>
                            </div>
                        </Col>
                        <Col md="7" className="pdpInner">
                            <div className="pdpInnerData">
                                <Card className="border-0">
                                    <CardBody className="pl-0 pt-0">
                                        <CardTitle className="font-weight-bold">{pdp.company}</CardTitle>
                                        <CardText className="pdpName">{pdp.pdpDeatils.pdpName}</CardText>
                                        <hr />
                                        <CardText className="pdpPrice">
                                            <span className="pdpPriceNew"><FontAwesomeIcon icon={faRupeeSign} /> {pdp.newPrice} </span>
                                            <span className="pdpPriceOld pl-4"><FontAwesomeIcon icon={faRupeeSign} /> {pdp.oldPrice}</span>
                                        </CardText>
                                        <CardText className="abLightGrey">*Additional tax may apply</CardText>
                                        <CardText>{pdp.pdpDeatils.pdpDesc}</CardText>
                                        <CardText className="font-weight-bold text-uppercase pdpCategoriesHeading">Select Size</CardText>
                                        <CardText className="pdpSelectSize pb-2">
                                            {
                                                pdp.pdpDeatils.sizes.map((size) => {
                                                    return(
                                                        <span className="rounded-circle" key={size}>{size}</span>
                                                    )
                                                }) 
                                            }
                                        </CardText>
                                        <CardText className="pdpCategoriesHeading font-weight-bold text-uppercase">Color</CardText>
                                        <CardText className="pdpProdColor"></CardText>
                                        <CardText className="pdpCategoriesHeading font-weight-bold text-uppercase">Best offers For this product</CardText>
                                        <div>
                                            <ul className="pl-0 pdpBestOffers">
                                                {
                                                    pdp.pdpDeatils.offers.map((offer) => {
                                                        return(
                                                            <li key={offer.id}><FontAwesomeIcon icon={faTag} /> <span className="pl-1">{offer.offer}</span></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <CardText className="pdpCartWishList">
                                            <span className="pdpAddToCartBtn"><Button className="border-0"><FontAwesomeIcon icon={faShoppingBag} /> <span className="pl-2">Add to Cart</span></Button></span>
                                            <span className="pl-3 pdpAddToWishListBtn"><Button><FontAwesomeIcon icon={faBookmark} /> <span className="pl-2">Add to Wishlist</span></Button></span>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                )
            }
        })
        return (
            <div className="pl-5 pr-5 pt-2 pdp">
                {pdpVal}
            </div>
        );
    }
}

export default withRouter(connect(mapStateTOProps)(Pdp));