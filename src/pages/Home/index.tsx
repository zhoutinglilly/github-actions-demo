/** @format */

import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import Ref from './Ref'

const Home = (): JSX.Element => {
    const history = useHistory()
    return (
        <Fragment>
            <div>Home-header</div>
            <Ref />
            <button onClick={() => history.push('/about')}>About</button>
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/gallery')}>Gallery</button>
            <button onClick={() => history.push('/plotly')}>Plotly</button>
            <button onClick={() => history.push('/icn3d')}>Icn3d</button>
        </Fragment>
    )
}
export default Home
