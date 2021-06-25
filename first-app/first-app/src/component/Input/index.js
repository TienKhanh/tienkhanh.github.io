import React from 'react'


var timer
class Input extends React.Component {

    

    update(e){
        let {keyCode} = e
        if(keyCode === 13) {
            
            setTimeout(() => {
                this.props.onAdd()
            }, 1000);
        } else {
            // sau khi ngung go 0.5 giay -> bao cho App update title di
            clearTimeout(timer)
            timer = setTimeout(() => {
                let {value} = e.target
                this.props.onUpdateTitle(value)
            }, 1000);
        }
    }

    render () {
        return (
            <input onKeyUp={(e)=> this.update(e)}/>
        )
    }
}
export default Input