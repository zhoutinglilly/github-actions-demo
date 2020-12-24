/** @format */

import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProvider} from './routes/AuthProvider'
import Routes from './routes'

const App = (): JSX.Element => {
    return (
        <AuthProvider>
            <Router basename="/github-actions-demo">
                <Routes />
            </Router>
        </AuthProvider>
    )
}

export default App
