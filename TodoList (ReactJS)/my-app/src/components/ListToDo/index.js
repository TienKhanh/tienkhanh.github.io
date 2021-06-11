import React, { Component } from 'react';

class ListToDo extends Component {

    renderMenu(){
        return (
            <>
            {
                this.props.dataList && this.props.dataList.map((item)=>{
                    return <li>
                        <div className="item"><input type="checkbox" checked={item.isDone}/></div>
                        <div className="item title">{item.title}</div>
                        <div className="item description">{item.description}</div>
                        <div className="item trash">Trash</div>
                    </li>
                })
            }
            </>
        );
    }

    render() {
        return (
            <div>
                <ul>{this.renderMenu()}</ul>
            </div>
        );
    }
}

export default ListToDo;