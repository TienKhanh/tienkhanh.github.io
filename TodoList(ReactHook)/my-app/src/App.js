import './App.css'
import React, {useState,useEffect} from 'react';
import Input from './component/Input';
import TextArae from './component/TextArea';
import ListToDo from './component/ListTodo';

const App = ()=>{
    const [data, setData] = useState({title:'',description:''})
    const [dataList, setDataList] = useState([])
    const [onAdd, setOnAdd] = useState(false)
  
    useEffect(()=>{
      
      if(data.title){
        handleAdd()
      }
      
    },[data])
    const updateTitle = (title)=>{
      let newData = {...data, title}
      setData(newData)
      console.log(`updateTitle`,data)
    }
    const updateDecs = (description)=>{
      let newData = {...data, description}
      setData(newData)
      console.log(`updateDecs`,data)
    }
    const trigger = ()=>{
      setOnAdd(true)
    }
    const handleAdd = ()=> {
      let newDataList = [...dataList]
      newDataList.push({
        id: new Date().getTime(),
        title: data.title,
        description: data.description
      })
      setDataList(newDataList)
      setOnAdd(false)
      console.log(dataList)
    }
    return (
      <div className="App">
        <h1>Add Todo List</h1>
        <Input onAdd={onAdd} onUpdateTitle={(value)=>updateTitle(value)}/>
        <TextArae onAdd={onAdd} onUpdateDecs={(value)=>updateDecs(value)}/>
        <button onClick={()=>trigger()}>Add</button>
        <ListToDo dataList={dataList}/>
      </div>
    )
}

export default App;