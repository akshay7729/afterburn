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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <div className="App">
          <Router>
            <Header />
            <Switch>
            <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
