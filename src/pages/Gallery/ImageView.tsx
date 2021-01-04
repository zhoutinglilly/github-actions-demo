/** @format */

import React, {Fragment} from 'react'
import {useParams} from 'react-router-dom'
import {IMAGES} from './List'

const ImageView = (): JSX.Element => {
    const {id}: {id: string} = useParams()
    const image = IMAGES[parseInt(id, 10)]
    if (!image) {
        return <div>No Image found</div>
    }
    return (
        <Fragment>
            <h1>{image.title}</h1>
            <div
                style={{
                    width: '100%',
                    height: '400px',
                    background: image.color,
                }}
            />
        </Fragment>
    )
}

export default ImageView
