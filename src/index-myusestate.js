import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


//尝试实现一个React.useState
let _state //用来记录state,避免重新渲染的时候 _state 变为初始值，此种方式只能存在单一当state
const myState = initVal => {
  console.log('mystate')
  _state = _state === undefined ? initVal: _state
  const setState = newVal => {
    console.log(_state)
    _state = newVal
    render()
  }
  return [_state, setState]
}



function App() {
  const [n, setN] = myState(0)
  const [m, setM] = myState(3)
  return(
    <div>
      <p>{n}</p>
      <div>
        <button onClick={() => {setN(n + 1)}}>+1</button>
      </div>
      <hr />
      <p>{m}</p>
      <div>
        <button onClick={() => {setM(m + 1)}}>+1</button>
      </div>
    </div>
  )
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()