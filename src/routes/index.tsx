/** @format */

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import GraphQL from '../pages/GraphQL'
import About from '../pages/About'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/graphql" component={GraphQL} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/about" component={About} />
        </Switch>
    )
}

export default Routes
