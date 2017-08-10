import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Brainstorm from './Brainstorm'
import Home from './Home'



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app-container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/brainstorm' component={Brainstorm} />
            <Route render={()=>{return <p>Page Not Found</p>}} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
