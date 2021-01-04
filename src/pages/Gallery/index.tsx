/** @format */

import React from 'react'
import {Switch, Route, Link, useLocation, useRouteMatch} from 'react-router-dom'
import GalleryList from './List'
import ImageView from './ImageView'
import ImageModal from './ImageModal'

const Index = (): JSX.Element => {
    const location: any = useLocation()
    const {url}: {url: string} = useRouteMatch()
    const background = location.state?.background

    return (
        <div>
            <Link to={`${url}/list`}>Visit the Gallery</Link>
            <h2>Feature Images</h2>
            <ul>
                <li>
                    <Link to={`${url}/img/2`}>Tomato</Link>
                </li>
                <li>
                    <Link to={`${url}/img/4`}>Crimson</Link>
                </li>
            </ul>
            <Switch location={background || location}>
                <Route path={`${url}/list`} component={GalleryList} />
                <Route path={`${url}/img/:id`} component={ImageView} />
            </Switch>
            {background && <Route path={`/gallery/img/:id`} component={ImageModal} />}
        </div>
    )
}

export default Index
