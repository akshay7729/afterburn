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
import Pdp from './components/Pdp'
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import ScrollToTop from './components/ScrollToTop'

const store = ConfigureStore();
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <ScrollToTop>
            <Header />
            <Switch>
            <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/shoes/:id" component={ProductsList} />
              <Route path="/buyShoes/:id" component={Pdp} />
            </Switch>
            </ScrollToTop>
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
