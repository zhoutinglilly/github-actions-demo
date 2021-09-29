/** @format */

import React from 'react'
import useElementOnScreen from '../../components/Hooks/useElementOnScreen'
import './index.scss'

export default (): JSX.Element => {
    const [ref1, isVisible1] = useElementOnScreen()
    const [ref2, isVisible2] = useElementOnScreen()
    const [ref3, isVisible3] = useElementOnScreen()
    const [ref4, isVisible4] = useElementOnScreen()

    console.log(isVisible1, isVisible2, isVisible3, isVisible4)
    return (
        <div className={'container'}>
            <div className={'left'}>
                {/* TODO: can use antd's Anchor Components or custome it's style */}
                <ul>
                    <li>
                        <a href="#div1">Mutation</a>
                    </li>
                    <li>
                        <a href="#div2">CopyNumber</a>
                    </li>
                    <li>
                        <a href="#div3">Expression</a>
                    </li>
                    <li>
                        <a href="#div4">Compound</a>
                    </li>
                </ul>
            </div>
            <div className={'right'}>
                <div>
                    <h3>Description</h3>
                    <p style={{height: '600px'}}>hsfjshf jsfhjshfjshjsdjhj sdhjshd jhsjhsjd jshdjshdj jshdjsh </p>
                </div>
                <div ref={ref1} id="div1" style={{background: isVisible1 ? 'pink' : 'black'}}>
                    <h3>Mutation</h3>
                    <p style={{height: '600px'}}>hsfjshf jsfhjshfjshjsdjhj sdhjshd jhsjhsjd jshdjshdj jshdjsh </p>
                </div>
                <div ref={ref2} id="div2" style={{background: 'green'}}>
                    <h3>CopyNumber</h3>
                    <p style={{height: '300px'}}>hsfjshf jsfhjshfjshjsdjhj sdhjshd jhsjhsjd jshdjshdj jshdjsh </p>
                </div>
                <div ref={ref3} id="div3" style={{background: 'red'}}>
                    <h3>Expression</h3>
                    <p style={{height: '300px'}}>hsfjshf jsfhjshfjshjsdjhj sdhjshd jhsjhsjd jshdjshdj jshdjsh </p>
                </div>
                <div ref={ref4} id="div4" style={{background: 'yellow'}}>
                    <h3>Compound</h3>
                    <p style={{height: '300px'}}>hsfjshf jsfhjshfjshjsdjhj sdhjshd jhsjhsjd jshdjshdj jshdjsh </p>
                </div>
                <div id="div5" style={{background: 'pink'}}>
                    <h3>Footer</h3>
                    <p style={{height: '300px'}}>hsfjshf jsfhjshfjshjsdjhj sdhjshd jhsjhsjd jshdjshdj jshdjsh </p>
                </div>
            </div>
        </div>
    )
}
