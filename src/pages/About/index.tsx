/** @format */

import React from 'react'
import './index.scss'

const About = (): JSX.Element => {
    const handleBtnClick = (e: React.MouseEvent) => {
        e && e.preventDefault()
    }
    return (
        <div className="about">
            {/* <div className="bg-animation">
                <div className="text">Home-header</div>
            </div> */}
            <div className="ellipsis">
                <div className="one-line">这是单行溢出显示省略号：规范化说过话</div>
                <div className="multiple-line">
                    这是多行溢出显示省略号：规范化说过话我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </div>
                <div className="block-item">
                    <span>后端</span>
                    <span>前端React</span>
                    <span>移动端</span>
                    <span>浏览器渲染原理</span>
                </div>
                <div className="useAfter">考虑兼容性，使用伪元素after实现溢出省略号，这个需要给定高度</div>
            </div>
            <a onClick={e => handleBtnClick(e)} href="/">
                点击
            </a>
        </div>
    )
}

export default About
