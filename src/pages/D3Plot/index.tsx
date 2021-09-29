/** @format */

import React, {useEffect, useRef} from 'react'
import {descending, ascending} from 'd3'
import type {HierarchyNode, HierarchyPointNode} from 'd3-hierarchy'
import {hierarchy, cluster} from 'd3-hierarchy'
import {create} from 'd3-selection'

type ChildrenType = Array<{
    name: string
    children?: ChildrenType
    value?: number
}>
type TreeDataType = {
    name: string
    children: ChildrenType
}

/**
 * dynamic set Object type on exist type
 */
interface HierarchyNodeType extends HierarchyNode<TreeDataType> {
    dx?: number
    dy?: number
}

interface HierarchyPointNodeType extends HierarchyPointNode<TreeDataType> {
    dx: number
    dy: number
}

export default (): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        createSvg()
    })
    const data: TreeDataType = {
        name: 'root',
        children: [
            {
                name: 'analytics',
                children: [
                    {
                        name: 'cluster',
                        children: [
                            {
                                name: 'converters',
                                children: [
                                    {name: 'Converters', value: 721},
                                    {name: 'DelimitedTextConverter', value: 4294},
                                ],
                            },
                            {
                                name: 'fs',
                                children: [
                                    {name: 'DragForce', value: 1082},
                                    {name: 'GravityForce', value: 1336},
                                ],
                            },
                        ],
                    },
                    {
                        name: 'graph',
                        children: [
                            {
                                name: 'BetweennessCentrality',
                                children: [
                                    {
                                        name: 'optimization',
                                        children: [
                                            {name: 'DirtySprite', value: 8833},
                                            {name: 'LineSprite', value: 1732},
                                        ],
                                    },
                                    {name: 'Converters', value: 721},
                                ],
                            },
                            {
                                name: 'LinkDistance',
                                children: [
                                    {
                                        name: 'fhsh',
                                        value: 4120,
                                    },
                                    {name: 'DelimitedTextConverter', value: 4294},
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }

    const TreeData = (value: TreeDataType) => {
        const root: HierarchyNodeType = hierarchy(value).sort(
            (a, b) => descending(a.height, b.height) || ascending(a.data.name, b.data.name),
        )
        root.dx = 30
        root.dy = 932 / (root.height + 1)
        return cluster().nodeSize([root.dx, root.dy])(root)
    }

    const createSvg = () => {
        const root = TreeData(data) as HierarchyPointNodeType
        const svg = create('svg').attr('width', 932).attr('height', 420)

        let x0 = Infinity
        let x1 = -x0
        root.each((d: {x: number}) => {
            if (d.x > x1) x1 = d.x
            if (d.x < x0) x0 = d.x
        })

        const g = svg
            .append('g')
            .attr('font-family', 'sans-serif')
            .attr('font-size', 10)
            .attr('transform', `translate(${root.dy / 3},${root.dx - x0})`)

        g.append('g')
            .attr('fill', 'none')
            // .attr("stroke", (d) => {
            //   console.log('ggg', d)
            //   return "red"
            // })
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)
            .selectAll('path')
            .data(root.links())
            .join('path')
            .attr(
                'd',
                d => `
            M${d.target.y},${d.target.x}
            L${d.source.y}, ${d.target.x}
            L${d.source.y}, ${d.source.x}
          `,
            )
            .attr('stroke', d => {
                const name = d.target.data.name
                if (name === 'Converters') {
                    return 'red'
                }
                return 'green'
            })

        const node = g
            .append('g')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-width', 3)
            .selectAll('g')
            .data(root.descendants().reverse())
            .join('g')
            .attr('transform', d => `translate(${d.y},${d.x})`)

        // node.append("circle")
        //     .attr("fill", d => d.children ? "#555" : "#999")
        //     .attr("r", 2.5);

        node.append('text')
            .attr('dy', '0.31em')
            .attr('x', d => (d.children ? 0 : 6))
            .text(d => (d.children ? '' : d.data.name))
            .filter(d => !!d.children)
            .attr('text-anchor', 'end')
        // .clone(true).lower()
        //   .attr("stroke", "white");
        const plot = svg.node() as string | Node
        ref.current && ref.current.append(plot)
    }
    return <div className="plot_container" ref={ref}></div>
}
