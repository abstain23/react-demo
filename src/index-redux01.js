import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import './index.css'

const reducers =  (state = {
  amount: 100000
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.amount + 100
    case 'DECREMENT':
      console.log(state.amount)
      return {
        amount: state.amount - 100
      }
    default:
      return state
  }
}
const store = createStore(reducers)

console.log(store.getState())

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      money: store.getState()
    }
  }

  render() {
    return (
      <div>
        App {this.props.money.amount}
        <div className='app'>
        <Bigpapa money={this.props.money}/>
        <Smallpapa money={this.props.money}/>
      </div>
      </div>
    )
  }
 }


class Bigpapa extends React.Component {
  constructor() {
    super()
    this.state = {
      // money
    }
  }
  render() {
    return(
      <div className='papa'>大爸 {this.props.money.amount}
        <Son1 money={this.props.money}/>
        <Son2 money={this.props.money}/>
      </div>
    )
  }
}

class Smallpapa extends React.Component {
  constructor() {
    super()
    this.state = {
      // money
    }
  }
  render() {
    return(
      <div className='papa'>小爸 {this.props.money.amount}
        <Son3 money={this.props.money}/>
        <Son4 money={this.props.money}/>
      </div>
    )
  }
}

class Son1 extends React.Component {
  constructor() {
    super()
    this.state = {
      // money
    }
    // eventHub.on('花钱', (data) => {
    //   this.setState({
    //     money
    //   })
    // })
  }
  render() {
    return(
      <div className='son'>
        son1 {this.props.money.amount}
      </div>
    )
  }
}

class Son2 extends React.Component {
  constructor() {
    super()
    this.state = {
      // money
    }
  }
  handleClick() {
    // money.amount -= 100
    // eventHub.trigger('花钱', 100)
    // this.setState({
    //   money
    // })
    store.dispatch({ type: 'DECREMENT' })
    // store.subscribe(() => {
    //   console.log(store.getState())
    //   render()
    // })
  }
  render() {
    return(
      <div className='son'>
        son2 {this.props.money.amount}
        <hr />
        <button onClick={this.handleClick.bind(this)} >消费100</button>
      </div>
    )
  }
}


class Son3 extends React.Component {
  constructor() {
    super()
    this.state = {
      // money
    }
  }
  render() {
    return(
      <div className='son'>
        son3 {this.props.money.amount}
      </div> 
    )
  }
}

class Son4 extends React.Component {
  constructor() {
    super()
    this.state = {
      // money
    }
  }
  render() {
    return(
      <div className='son'>
        son4 {this.props.money.amount}
      </div>
    )
  }
}

function render() {
  ReactDOM.render(
    <App money={store.getState()}/>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)