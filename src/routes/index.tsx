/** @format */

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import GraphQL from '../pages/GraphQL'
import About from '../pages/About'
import Login from '../pages/Login'
import Gallery from '../pages/Gallery'
import Plot from '../pages/Plot/testLegend'
import D3 from '../pages/D3Plot'
import Icn3d from '../pages/Icn3d'
import PrivateRoute from './PrivateRoute'
import Intersection from '../pages/IntersectionObserver'

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/graphql" component={GraphQL} />
            <Route path="/login" component={Login} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/plotly" component={Plot} />
            <Route path="/d3" component={D3} />
            <Route path="/icn3d" component={Icn3d} />
            <Route path="/intersection" component={Intersection} />
            <PrivateRoute path="/about" component={About} />
        </Switch>
    )
}

export default Routes
