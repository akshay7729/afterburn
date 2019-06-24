import React, { Component } from 'react';
import MainFold from './MainFold';
import Categories from './Categories';
import { CATEGORIES } from '../shared/categoriesDate'

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            categories : CATEGORIES
        }
    }

    render() {
        return (
            <React.Fragment>
                <MainFold />
                <Categories categories={this.state.categories} />
            </React.Fragment>
        );
    }
}

export default Home;