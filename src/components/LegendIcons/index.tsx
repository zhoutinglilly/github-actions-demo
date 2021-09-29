/** @format */

import React from 'react'
import Path from './config'

type PropsType = {
    color: string
    index?: number
}

type IconType = {
    path: string
    open?: boolean
}
export default (props: PropsType): JSX.Element => {
    const {color, index = 0} = props
    const {path, open} = Object.values(Path)[index] as IconType
    const styles = open
        ? {
              stroke: color,
              strokeOpacity: 1,
              strokeWidth: '1px',
              fill: 'none',
          }
        : {
              strokeWidth: 0,
              fill: color,
              fillOpacity: 1,
          }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" version="1.1">
            <path
                d="M5,10h30"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeOpacity: 1,
                    strokeWidth: '2px',
                }}
            />
            <path transform="translate(20,0)" d={path} style={{opacity: 1, ...styles}} />
        </svg>
    )
}
