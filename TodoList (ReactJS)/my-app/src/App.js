// import './App.css';
// import React, {Component} from 'react'
// import Input from './component/Input'
// import TextArea from './component/TextArea'
// import ListToDo from './component/ListToDo'

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       data: {
//         title: '',
//         description: ''
//       },
//       dataList: [], 
//       arrDone: []
//     }
//   }

//   updateTitle(title) {
//     // up date lai cai data trong state
//     let newData = {...this.state.data, title}

//     // newData.title = title
//     // console.log(`newData`, newData)

//     this.setState({
//       data: newData
//     })
//   }
//   updateDes(description) {
//     // up date lai cai data trong state
//     let newData = {...this.state.data, description}
//     this.setState({
//       data: newData
//     })
//   }
//   onAdd() {
//     // Check xem title co rong ko 
//     let {title, description} = this.state.data
//     if(!title) {
//       return
//     }
//     // update lai dataList

//     let newDataList = [...this.state.dataList]
//     newDataList.push({
//       id: new Date().getTime(),
//       title,
//       description
//     })
//     this.setState({
//       dataList: newDataList
//     })
//   }
//   onDelete(id){
//     // loai bo item co id dc chon
//     let newDataList = this.state.dataList.filter(item => {
//       return item.id !== id
//     })
//     this.setState({
//       dataList: newDataList
//     })
//   }
//   onCheckBox(item){
//     let {arrDone, dataList} = this.state
//     if(item.isDone) {
//       item.isDone = false
//       let index = arrDone.findIndex(x => x.id === item.id)
//       arrDone.splice(index, 1)
//     } else {
//       item.isDone = true
//       arrDone.push(item)
//     }
//     dataList.forEach(it => {
//       let index = arrDone.findIndex(x => x.id === it.id)
//       if(index !== -1) {
//         it.orderDone = index
//       } else {
//         delete it.orderDone
//       }
//     })
//     this.setState({
//       dataList
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Add ToDo list</h1>
//         <Input  onAdd={()=>this.onAdd()} onUpdateTitle={(value)=> this.updateTitle(value)}/>
//         <TextArea onAdd={()=>this.onAdd()} onUpdateDes={(value)=> this.updateDes(value)}/>
//         <button onClick={()=>this.onAdd()}>Add</button>
//         <ListToDo onCheckBox={(item)=>this.onCheckBox(item)} onDelete={(id)=>this.onDelete(id)} dataList={this.state.dataList}/>
//       </div>
//     )
//   }

// }




// export default App;



// Click hoac enter de add cong viec
// Neu tieu de rong thi ko cho tao
// Check box de danh dau hoan thanh cong viec
// Check box hoan thanh thi phai remove xuong cuoi list
// Click thung rac de remove cong viec



// component control và conponent uncontrol

import React, {useState} from "react"

const App = () => {

  const [sayHi, setSayHi] = useState("hello world")
  const [isOpen, setIsOpen] = useState(true)


  return <>

  {isOpen ? <div>sayHi</div> : ""}

  <button onClick={() =>setSayHi("hello anh em")}>Click me !!!</button>
  <button onClick={() =>setIsOpen(!isOpen)}>Togle sayHi</button>

  </>
}

export default App