import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import './scss/config.scss';
import './App.scss';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Header />
            <Switch>
            <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/productsList" component={ProductsList} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
