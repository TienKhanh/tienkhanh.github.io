import './App.css';
import React from 'react';
import Input from './components/Input';
import Textarea from './components/Textarea';
import ListToDo from './components/ListToDo';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{
        title:'',
        description:''
      },
      dataList: []
    }
  }

  updateTitle(title){
    let newData = {...this.state.data, title}
    this.setState ({
      data: newData
    })
    console.log(this.state.data)
  }

  updateDes(description){
    let newData = {...this.state.data, description}
    this.setState({
      data: newData
    })
    console.log(this.state.data)
  }

  onAdd(){
    let {title, description} = this.state.data;
    if(!title){
      return
    }

    let newDataList = [...this.state.dataList]
    newDataList.push({ title, description })
    this.setState({
      dataList: newDataList
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Add ToDo List</h1>
        <Input onUpdateTitle={(value)=>this.updateTitle(value)}/>
        <Textarea onUpdateDes={(value)=>this.updateDes(value)}/>
        <button onClick={()=>this.onAdd()}>ADD</button>
        <ListToDo dataList={this.state.dataList}/>

      </div>
    );
  }
}

export default App;
