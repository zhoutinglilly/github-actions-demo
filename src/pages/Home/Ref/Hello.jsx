import { useState, useImperativeHandle, forwardRef } from 'react'

const SayHello = (props, ref) => {
    const [ visible, setVisible ] = useState(false)
    // 将子组件暴露出来的对象挂载到 child
    useImperativeHandle(ref, () => {
        return {
            setVisible
        }
    })
    return visible && (
        <h1 onClick={() => setVisible(false)}>Hello world</h1>
    )
}

export default forwardRef(SayHello)
