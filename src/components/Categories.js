import React, { Component } from 'react'
import { transform } from '@babel/core';

class Categories extends Component{

    render(){

        const cat = this.props.categories.map((category) => {
            return(
                <div className="col-3 catsCol" key={category.id}>
                    <div>
                        <figure>
                            <img src={category.img} alt={category.name} className="w-100 catImgs"/>
                        </figure>
                        <figcaption>{category.name}</figcaption>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <h2 className="catHeader pb-4">Categories</h2>
                </div>

                <div className="cats">
                    <div className="row">{cat}</div>
                </div>
            </div>
        )
    }
}

export default Categories