import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            
            <div>
                Day la component anh
                <div>{this.props.children}</div>
                <button onClick={()=>this.props.onChangeShow()}>click me!</button>
            </div>
        );
        debugger
    }
}
export default Image;