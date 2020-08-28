import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from '../src/components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Collection from './pages/Collection';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
          <Route exact path="/saved" component={Collection} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;