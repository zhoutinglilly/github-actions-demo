import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import GraphQL from './pages/GraphQL'


const route = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/graphql" component={GraphQL} />
      </Switch>
    </Router>
  )
}

export default route
