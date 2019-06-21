import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap';

class Categories extends Component{

    render(){

        const cat = this.props.categories.map((category) => {
            return(
                <div className="col-md-3 catsCol" key={category.id}>
                    <Card>
                        <CardImg src={category.img} alt={category.name} className="catCardImg"></CardImg>
                        <CardBody>
                            <CardTitle>{category.name}</CardTitle>
                            <CardText>{category.desc}</CardText>
                            <Button>Browse</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <h2 className="catHeader pb-4">Recommended for you</h2>
                </div>

                <div className="cats">
                    <div className="row">{cat}</div>
                </div>
            </div>
        )
    }
}

export default Categories