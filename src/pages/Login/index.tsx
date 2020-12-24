/** @format */

import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useAuth, ContextType} from '../../routes/AuthProvider'
const Login = (): JSX.Element => {
    const history = useHistory()
    const location = useLocation<{from: {pathname: string}}>()
    const auth: ContextType = useAuth()

    const from = location.state?.from || {pathname: '/'}
    const handleLoginClick = () => {
        auth.signIn(() => {
            history.replace(from)
        })
    }
    return <button onClick={handleLoginClick}>Login</button>
}

export default Login
