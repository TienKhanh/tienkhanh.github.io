


import React, {useEffect, useRef} from 'react'

const Input = ({onUpdateData, onAdd, handleAdd}) => {
    const inputDom = useRef(null)
    const textAreaDom = useRef(null)
    useEffect(() => {
        if(onAdd) {
            onUpdateData( {
                title: inputDom.current.value,
                description: textAreaDom.current.value
            })
        }
    }, [onAdd])


    return (
        <>
            <input ref={inputDom}/>
            <textarea ref={textAreaDom}/>
        </>
    ) 
}

export default Input