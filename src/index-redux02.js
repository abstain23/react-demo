import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

const reducers = (state = {value: 1000}, action) => {
  switch (action.type) { //事件列表
    case 'INCREMENT':
      return {
        value: state.value + action.payload
      }
    case 'DECREMENT':
      const copy = JSON.parse(JSON.stringify(state))
      return {
        value: copy.value - action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducers) //store存储state,更新使用store.dispatch({type:'事件名称', payload:'参数'})，返回一个新的state，通过state.getState()拿到，同时会触发store.subscribe(render)里面的回调。


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.state = store.getState()
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

class Test extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  testClick() {
    store.dispatch({type: 'DECREMENT', payload: 99})
  }
  render() {
    const {test} = this.props
    return (
      <div onClick={this.testClick}>
        xxxxx---- {test.value}
      </div>
    )
  }
}

function render() {
  ReactDOM.render(
    <div>
      <Counter 
    value={store.getState().value}
    onIncrement={() => store.dispatch({ type: 'INCREMENT', payload: 100 })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT', payload: 300 })}
    />
    <Test test={store.getState()}/>
    </div>,
    document.getElementById('root')
  )
}
render()
store.subscribe(render)