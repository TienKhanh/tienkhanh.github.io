import React, {Component} from 'react';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList:[
        {title: "Sach lop 1"},
        {title: "Sach lop 2"},
      ], isShow: true
    }
  }
  changeShow(){
    this.setState({
      isShow : !this.state.isShow
    })
  }
  render(){
    return(
      <div>
        {this.state.isShow ? <Menu dataList={this.state.dataList}/> : null}
        <button onClick={()=>this.changeShow()}>Click me</button>
      </div>
    );
  }
}

export default App;
