/** @format */

import React, {useMemo, useRef} from 'react'
import Plot from 'react-plotly.js'
import Plotly from 'plotly.js'
import html2canvas from 'html2canvas'
import Legends from '../../components/Legends'
import './index.scss'

type CommonDataType = {
    x: string[]
    y: number[] | Array<number[]>
    showlegend: boolean
    type: 'box'
    boxpoints: 'all' | 'outliers' | 'suspectedoutliers' | false
    name: string
}

type PlotDataType =
    | (CommonDataType & {
          upperfence: number[]
          lowerfence: number[]
          q1: number[]
          q3: number[]
          median: number[]
          text: string
      })
    | (CommonDataType & {
          pointpos: number
          marker: {
              opacity: number
          }
      })

export default (): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null)
    const layout = {
        // hovermode: "closest",
        margin: {
            l: 40,
            r: 250,
            b: 80,
            t: 40,
        },
    }

    const trace1 = {
        upperfence: [5.787641414483327],
        lowerfence: [2.7441610955704103],
        q1: [3.799083955574247],
        q3: [4.644668258350544],
        median: [4.177120502846516],
        y: [
            [
                2.411426245726465,
                1.831877241191673,
                5.9618548076361595,
                5.913846824263042,
                5.91528186586766,
                1.8196681834964554,
                2.3045110418099526,
            ],
        ],
        x: ['gdgd'],
        type: 'box',
        boxpoints: 'outliers',
        text: 'gdgd',
        name: 'gdgd',
        showlegend: false,
    }

    const trace2 = {
        y: [
            3.7729413378313352,
            3.7729413378313352,
            3.7729413378313352,
            3.7729413378313352,
            3.7729413378313352,
            3.7729413378313352,
        ],
        x: ['gdgd2'],
        type: 'box',
        boxpoints: 'all',
        name: 'gdgd2',
        pointpos: 0,
        showlegend: false,
        marker: {
            opacity: 0,
        },
    }

    const trace4 = {
        upperfence: [4.777682717073553],
        lowerfence: [2.990954860396993],
        q1: [3.148751628712374],
        q3: [3.8737967517021454],
        median: [3.3405622690264134],
        y: [[5.278728212938939]],
        x: ['cervix'],
        type: 'box',
        boxpoints: 'outliers',
        text: 'cervix',
        name: 'cervix',
        showlegend: false,
    }

    const data = [trace1, trace2, trace4] as PlotDataType[]

    // useEffect(() => {
    //     if(ref.current) {
    //         console.log(ref.current)
    //         Plotly.newPlot(ref.current, data, layout)
    //     }
    // })

    const legendData = [
        {
            id: 0,
            index: 0,
            text: 'gdgd',
            color: 'rgb(31, 119, 180)',
        },
        {
            id: 1,
            index: 1,
            text: 'gdgd2',
            color: 'rgb(255, 127, 14)',
        },
        {
            id: 2,
            index: 2,
            text: 'cervix',
            color: 'rgb(44, 160, 44)',
        },
    ]
    return (
        <div id="plot_container" ref={ref}>
            <Plot
                data={data}
                layout={layout}
                style={{width: '100%'}}
                config={{
                    modeBarButtonsToRemove: ['toImage'],
                    modeBarButtonsToAdd: [
                        {
                            title: '',
                            name: 'Download plot as a png',
                            icon: (Plotly as any).Icons.camera,
                            click: () => {
                                if (ref.current) {
                                    html2canvas(ref.current, {useCORS: true}).then(canvas => {
                                        const imgUrl = canvas.toDataURL('image/png')
                                        const a = document.createElement('a') // 创建a标签
                                        a.setAttribute('download', 'plot') // download属性
                                        a.setAttribute('href', imgUrl) // href链接
                                        a.click()
                                    })
                                }
                            },
                        },
                    ],
                }}
            />
            <Legends data={legendData} style={{width: '150px'}} />
            {/* <div className="plot_legend">
                <p>one</p>
                <p>two</p>
            </div> */}
        </div>
    )
}
