import React from 'react'
import PropTypes from 'prop-types';


const ListToDo = ({dataList, ...props}) => {


        const renderMenu = () => {

        // render list data by orderdone filed
        let arrNotDone = dataList.filter(item => !item.orderDone)
        let arrDone = dataList.filter(item => item.orderDone)
        arrDone.sort((a, b) => a.orderDone - b.orderDone)
        let arrRender =  arrNotDone.concat(arrDone)

        // se tra ve 1 doan JSX
        return (
            <>
            {
                arrRender && arrRender.length > 0 && arrRender.map((item, index) => {
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

    return <div>
            <ul>
                {renderMenu()}
            </ul>
        </div>
}


ListToDo.defaultProps = {
    dataList: [],
}

ListToDo.propTypes = {
    dataList: PropTypes.array,
}

export default ListToDo
