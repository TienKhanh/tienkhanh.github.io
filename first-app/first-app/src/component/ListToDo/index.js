import React from 'react'
import './index.css'

class ListToDo extends React.Component {

    

    renderMenu() {

        // se tra ve 1 doan JSX
        return (
            <>
            {
                this.props.dataList && this.props.dataList.length > 0 && this.props.dataList.map((item, index) => {
                    return <li className={`${item.isDone?'done':''}`}>
                        <div className="item"><input type="checkbox" checked={item.isDone} onChange={()=>this.props.onCheckBox(item)}/></div>
                        <div className="item titile">{item.title}</div>
                        <div className="item description">{item.description}</div>
                        <div className="item description" onClick={()=>this.props.onDelete(item.id)}>trash</div>
                    </li>
                })
            }
            </>
        )
    }

    render () {
        return (
            <div>
                <ul>
                    {this.renderMenu()}
                </ul>
            </div>
        )
    }
}

export default ListToDo