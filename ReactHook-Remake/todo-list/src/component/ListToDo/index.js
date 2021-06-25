import React from 'react'
import './index.css'
import PropTypes from 'prop-types';

// class ListToDo extends React.Component {

    

//     renderMenu() {

//         // render list data by orderdone filed
//         let arrNotDone = this.props.dataList.filter(item => !item.orderDone)
//         let arrDone = this.props.dataList.filter(item => item.orderDone)
//         arrDone.sort((a, b) => a.orderDone - b.orderDone)
//         let arrRender =  arrNotDone.concat(arrDone)

//         // se tra ve 1 doan JSX
//         return (
//             <>
//             {
//                 arrRender && arrRender.length > 0 && arrRender.map((item, index) => {
//                     return <li className={`${item.isDone?'done':''}`}>
//                         <div className="item"><input type="checkbox" checked={item.isDone} onChange={()=>this.props.onCheckBox(item)}/></div>
//                         <div className="item titile">{item.title}</div>
//                         <div className="item description">{item.description}</div>
//                         <div className="item description" onClick={()=>this.props.onDelete(item.id)}>trash</div>
//                     </li>
//                 })
//             }
//             </>
//         )
//     }

//     render () {
//         return (
//             <div>
//                 <ul>
//                     {this.renderMenu()}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default ListToDo



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
                        <div className="item"><input type="checkbox" checked={item.isDone}/></div>
                        <div className="item titile">{item.title}</div>
                        <div className="item description">{item.description}</div>
                        <div className="item description">trash</div>
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



// const sum = (a, b) => {

//     const increase = () => {
//         a = a + 3
//     }

//     return increase() + b
// }