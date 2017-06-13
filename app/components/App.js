import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='container'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route render={function() {
            return <p>Not found</p>
          }} />
        </Switch>
      </div>
    </Router>
    )
  }
}

module.exports = App;
