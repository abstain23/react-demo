import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'


const initVal = {count: 1}

function reducer(state, action) {
  if(!state) {
    return {count:0}
  } else {
    if(action.type === 'add') {
      return {count: state.count + 1}
    } else {
      return state
    }
  }
}


function Counter () {
  const [state, dispatch] = useReducer(reducer, initVal)
  return (
    <div>
      count -- {state.count}
      <button onClick={() => dispatch({type:'add'})}>+1</button>
    </div>
  )
}


// function Counter() {
//   let count = 0
//   let add = () => {
//     console.log('add')
//     count += 1
//     render()
//   }
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={add}> +1</button>
//     </div>
//   )
// }

function render() {
  ReactDOM.render(<Counter />, document.getElementById('root'))
}
render()