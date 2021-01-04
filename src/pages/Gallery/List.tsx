/** @format */

import React, {Fragment} from 'react'
import {Link, useLocation} from 'react-router-dom'

export const IMAGES = [
    {id: 0, title: 'Dark Orchid', color: 'DarkOrchid'},
    {id: 1, title: 'Lime Green', color: 'LimeGreen'},
    {id: 2, title: 'Tomato', color: 'Tomato'},
    {id: 3, title: 'Seven Ate Nine', color: '#789'},
    {id: 4, title: 'Crimson', color: 'Crimson'},
]
const List = (): JSX.Element => {
    const location = useLocation()
    return (
        <Fragment>
            {IMAGES.map(i => (
                <Link
                    key={i.id}
                    to={{
                        pathname: `/gallery/img/${i.id}`,
                        state: {
                            background: location,
                        },
                    }}>
                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            background: i.color,
                        }}
                    />
                    <p>{i.title}</p>
                </Link>
            ))}
        </Fragment>
    )
}

export default List
