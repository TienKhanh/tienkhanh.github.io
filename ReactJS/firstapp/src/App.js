import './App.css';
import React, { Component } from 'react';
import Input from './component/Input';
import Textarea from './component/Textarea';
// import ListToDo from './component/ListToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add Todo List</h1>
        <Input />
        <Textarea />
        {/* <ListToDo /> */}
      </div>
    );
  }
}

export default App;