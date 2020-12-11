/** @format */

import React, {Fragment} from 'react'
import Hello from './Hello'
class RefDemo extends React.Component {
    handleClick = () => {
        if (this.child) {
            this.child.setVisible(true)
        }
    }
    onRef = ref => {
        // 将子组件暴露出来的对象挂载到 child
        this.child = ref
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick}>say Hello</button>
                <Hello ref={this.onRef} />
            </Fragment>
        )
    }
}

export default RefDemo
