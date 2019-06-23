import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import './scss/config.scss';
import './App.scss';
import Header from './components/Header'
import MainFold from './components/MainFold'
import Categories from './components/Categories';
import { CATEGORIES } from './shared/categoriesDate'
import Footer from './components/Footer';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
        categories : CATEGORIES
    }

  }

  render(){
    return (
      <div className="App">
        <Header />
        <MainFold />
        <Categories categories={this.state.categories} />
        <Footer />
      </div>
    );
  }
}

export default App;
