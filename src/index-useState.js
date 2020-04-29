import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import './index.css'




let _state = [] 
let index = 0 //记录每个变量在state的索引
const myState = initVal => {
  const currentIndex = index
  console.log(currentIndex)
  !_state[currentIndex] && (_state[currentIndex] = initVal)
  const setState = newVal => {
    _state[currentIndex] = newVal
    render()
  }
  index += 1
  console.log(_state[currentIndex])
  return [_state[currentIndex], setState]
}

let flag = true
function App() {
  const [n, setN] = myState(0)
  let m, setM
  if(flag) {
    [m, setM] = myState(3)
    flag = false
  }
  const [k, setK] = myState(6)
  return(
    <div>
      <p>{n}</p>
      <div>
        <button onClick={() => {setN(n + 1)}}>+1</button>
      </div>
      <hr />
      <p>{m}</p>
      <div>
        <button onClick={() => {setM(m + 6)}}>+6</button>
      </div>
      <hr />
      <p>{k}</p>
      <div>
        <button onClick={() => {setK(k + 5)}}>+5</button>
      </div>
    </div>
  )
}



function App2(){
  const [n, setN] = useState(0)
  const [c, setC] = useState(0)
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  // useEffect(() => {
  //     console.log('use effect...',count)
  //     const timer = setInterval(() => {
  //         console.log('timer...count:', count)
  //         setCount(count + 1)
  //     }, 1000)
  //     return ()=> clearInterval(timer)
  // },[count])

//   useEffect(() => {
//     console.log('use effect...',count)
//     const timer = setInterval(() => {
//         console.log('timer...count:', countRef.current)
//         setCount(++countRef.current)
//     }, 1000)
//     return ()=> clearInterval(timer)
// },[count])

  useEffect(() => {
    console.log('我就执行一次')
  },[])
  useEffect(() => {
    console.log('我每次都执行')
  })
  useEffect(() => {
    console.log('c变了我才执行')
  },[c])

  const log = () => setTimeout(() => console.log(`n: ${n}`), 3000)
  return (
      <div className='App'>
          <p>{n}</p>
          <p>{c}</p>
          <p>{count}</p>
          <p>
              <button onClick={() => setN(n + 1)}>+1</button>
              <button onClick={log}>log</button>
              <button onClick={() => setC(c + 1)}>+1</button>
          </p>
      </div>
  )
}


function render() {
  // index = 0 //保证每次渲染从数组第一项开始
  ReactDOM.render(<App2 />, document.getElementById('root'))
}

render()
//https://www.jianshu.com/p/2f371e1e9ce0