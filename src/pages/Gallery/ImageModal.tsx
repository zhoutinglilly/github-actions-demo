/** @format */

import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {IMAGES} from './List'
import './ImageModal.scss'

const Modals = (): JSX.Element | null => {
    const history: any = useHistory()
    const {id}: {id: string} = useParams()
    const image = IMAGES[parseInt(id, 10)]

    const goBack = () => {
        history.goBack()
    }

    if (!image) {
        return null
    }
    return (
        <div className="imageModal" onClick={goBack}>
            <div className="imageModal-content">
                <h1>{image.title}</h1>
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                        background: image.color,
                    }}
                />
                <button onClick={goBack}>Close</button>
            </div>
        </div>
    )
}

export default Modals
