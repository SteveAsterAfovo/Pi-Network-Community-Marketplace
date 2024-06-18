import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
