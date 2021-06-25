import React, {useEffect} from 'react';
var i = 0
const Input = ({onAdd, onUpdateTitle})=>{
    useEffect(() => {
        i = i + 0.5
        // console.log(onAdd)
        if(onAdd){
            onUpdateTitle("techmaster " + i)
        }
    }, [onAdd])
    return <input />
}

export default Input;