import React, { Component } from 'react';
import MainFold from './MainFold';
import Categories from './Categories';
import { CATEGORIES } from '../shared/categoriesDate'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateTOProps = state => {
    return{
        categories : CATEGORIES
    }
}

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <MainFold />
                <Categories categories={this.props.categories} />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateTOProps)(Home));