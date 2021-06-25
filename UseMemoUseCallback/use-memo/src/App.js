import React, {useState, useMemo} from 'react'
import './App.css';

const HelloWorld = React.memo(() => {
  console.log(`render`)
  return <h1>Hello World</h1>
},(preProps,nextProps)=>{
  return true
})
const SearchResult = React.memo(() => {
  console.log(`SearchResult`)
  return <h1>Hello World</h1>
},(preProps,nextProps)=>{
  return true
})



function App() {
  const [arr, setArr] = useState([1,1,1,1,1,11,1,1,1,1,11])
  const [count, setCount] = useState(0)

  const diffFunc = useMemo(() => {
    console.log('run')
    let kq = 0
    let newArr = [...arr]
    newArr.forEach(item=>{
      kq += item
    })
    return kq
  }, [])

    return (
    <div className="App">
      <HelloWorld count={count}/>
      Ket qua la {diffFunc}
      <h1>count is: {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
