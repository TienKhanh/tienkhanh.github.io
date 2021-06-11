import React from 'react';

var timer

class Input extends React.Component {
    update(e){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            let value = e.target.value;
            this.props.onUpdateTitle(value);
        },1000);
    }
    render(){
        return(
            <input onKeyDown={(e)=> this.update(e)}/>
        );
    }
}

export default Input;

//  (e)=> this.update(e)