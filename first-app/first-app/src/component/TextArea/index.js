import React from 'react'
var timer
class TextArea extends React.Component {

    update(e){
        // sau khi ngung go 0.5 giay -> bao cho App update title di
        let {keyCode} = e
        if(keyCode === 13) {
            setTimeout(() => {
                this.props.onAdd()
            }, 1000);
        } else {
            clearTimeout(timer)
            timer = setTimeout(() => {
                let {value} = e.target
                this.props.onUpdateDes(value)
            }, 1000);
        }

    }

    render () {
        return (
            <textarea rows={6} onKeyDown={(e)=> this.update(e)}/>
        )
    }
}

export default TextArea

// const sum = (a,b) => a+b

// sum(4,5)