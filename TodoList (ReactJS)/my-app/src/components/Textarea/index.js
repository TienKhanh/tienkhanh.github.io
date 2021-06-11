import React from 'react';

var timer
class Textarea extends React.Component {

    update(e){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            let {value} = e.target;
            this.props.onUpdateDes(value);
        },1000)
    }

    render(){
        return(
            <textarea rows="6" onKeyDown={(e)=>this.update(e)}/>
        );
    }
}

export default Textarea;