/** @format */

import React, {Fragment, useRef, useEffect, useMemo} from 'react'
import LegendIcon from '../LegendIcons'
import './index.scss'

type PropsType = {
    data: LegendItem[]
    onClick?: (e: any) => void
    onDoubleClick?: (e: any) => void
    groups?: boolean
    sideNumberMax?: number
    config?: {
        editColor: boolean | JSX.Element
    }
    style?: React.CSSProperties
}

type LegendItem = {
    id: number
    index: number
    text: string
    extra?: string
    color: string
}

const DEFAULT_SIDE_NUMBER_MAX = 15

const Legends = (props: PropsType): JSX.Element => {
    const {data = [], sideNumberMax = DEFAULT_SIDE_NUMBER_MAX, style} = props

    const ref = useRef(null)

    const initialLength = useRef(0)

    useEffect(() => {
        initialLength.current = data.length
    }, [])

    // const handleClick = (e) => {
    //     const result = value.filter((i) => i.text !== e.text)
    //     const hideList = hideLegends.concat(e)
    //     setHideLegends(hideList)
    //     setResetValue(undefined)
    //     if (onChange && typeof onChange === 'function') {
    //         onChange(result)
    //     }
    // }

    // const handleDoubleClick = (e) => {
    //     const hideItem = value.filter((i) => i.text !== e.text)
    //     setHideLegends((state) => state.concat(hideItem))
    //     setResetValue(undefined)
    //     if (onChange && typeof onChange === 'function') {
    //         onChange([e])
    //     }
    // }

    // const handleEditClick = (e) => {
    //     setColor(e)
    //     setColorPickerVisiable(true)
    // }

    const length = initialLength.current > sideNumberMax * 2 ? initialLength.current / 2 : sideNumberMax

    const listGroup = useMemo(() => {
        const lists = data.concat()
        const result = [lists.splice(0, length), lists].filter(i => i && i[0])
        return {
            list: result,
        }
    }, [data, length]) as {
        list: LegendItem[][]
        groupInfo?: any
    }

    const legends = listGroup.list || []
    return (
        <Fragment>
            <div className={'expanded-plot-legend'} ref={ref} style={style}>
                <div className="plot-legend-group">
                    {legends.map((list: LegendItem[], index: number) => (
                        <div key={index} className="plot-legend-group-item" style={{width: `${100 / legends.length}%`}}>
                            {list.map(item => {
                                return (
                                    <div className="plot-legend" key={item.id}>
                                        <div title={item.text} className="legend-text">
                                            <span className="legend-text-container">
                                                <span className="legend-icon" style={{height: '20px'}}>
                                                    {/**
                                                     * TODO:
                                                     *  1: can customize Icon size
                                                     *  2: default icon
                                                     *  3: scatter and (box or bar) different icon
                                                     *  */}
                                                    <LegendIcon color={item.color} index={item.id} />
                                                </span>
                                                <span className="legend-word">{item.text}</span>
                                            </span>
                                            {/* config edit icon */}
                                            <span className="legend-edit">Edit</span>
                                        </div>
                                        {item.extra && <div className="legend-text-extra">{item.extra}</div>}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Legends
