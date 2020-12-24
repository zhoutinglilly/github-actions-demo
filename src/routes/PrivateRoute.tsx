/** @format */

import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuth, ContextType} from './AuthProvider'

type PrivateRouteType = {
    component: () => JSX.Element
    path: string
}

const PrivateRoute = ({component: Component, ...rest}: PrivateRouteType): JSX.Element => {
    const auth: ContextType = useAuth()
    return (
        <Route
            {...rest}
            render={({location}) => {
                if (auth.user) {
                    return <Component />
                }
                return <Redirect to={{pathname: '/login', state: {from: location}}} />
            }}
        />
    )
}

export default PrivateRoute
