import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

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
                                <Link to="/productsList" className="nav-link">shop</Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <h2 className="catHeader pb-4">Recommended for you</h2>
                <div className="cats">
                    <div className="row">{cat}</div>
                </div>
            </div>
        )
    }
}

export default Categories