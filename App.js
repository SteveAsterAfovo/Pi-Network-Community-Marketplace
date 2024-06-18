import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/profile/:userId" component={UserProfile} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
