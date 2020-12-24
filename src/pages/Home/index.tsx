/** @format */

import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import Ref from './Ref'

const Home = (): JSX.Element => {
    const history = useHistory()
    return (
        <Fragment>
            <div>home</div>
            <Ref />
            <button onClick={() => history.push('/about')}>About</button>
            <button onClick={() => history.push('/about')}>Login</button>
        </Fragment>
    )
}
export default Home
