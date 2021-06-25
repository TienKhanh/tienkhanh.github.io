import React, { Component } from 'react';

var timer
class TextArea extends Component {

    update(e){

        let {keyCode} = e
        if(keyCode === 13){
            setTimeout(()=>{
                this.props.onAdd()
            , 500})
        } else {
            clearTimeout(timer)
            timer = setTimeout(()=>{
                let {value} = e.target
                this.props.onUpdateDes(value)
            },500)
        }
        
    }
    render() {
        return (
            <textarea rows="6" onKeyUp={(e)=>this.update(e)}/>
        );
    }
}

export default TextArea;