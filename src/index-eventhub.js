import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const money = {
  amount: 100000
}

// 事件总线 发布订阅
const fnLists = {}
const eventHub = {
  trigger(eventname, data){
    const fnList = fnLists[eventname]
    if(fnList && fnList.length) {
      fnList.forEach(fn => {
        fn(data)
      })
    }
  },
  on(eventname, fn){
    if(!fnLists[eventname]) {
      fnLists[eventname] = []
    }
    fnLists[eventname].push(fn)
  }
}
// eventHub.on('enentname', '函数')
// eventHub.trigger('eventname', '数据')
// eventHub.on('花钱',(data) => console.log(data))
// eventHub.trigger('花钱', 100)

// 仓库
const x = {
  init() {
    eventHub.on('花钱',(data) => {
      money.amount -= data
      render()
    })
  }
}

x.init()

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      money
    }
  }

  render() {
    return (
      <div>
        App {this.state.money.amount}
        <div className='app'>
        <Bigpapa money={this.state.money}/>
        <Smallpapa money={this.state.money}/>
      </div>
      </div>
    )
  }
 }


class Bigpapa extends React.Component {
  constructor() {
    super()
    this.state = {
      money
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
      money
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
      money
    }
  }
  handleClick() {
    // money.amount -= 100
    eventHub.trigger('花钱', 100)
    // this.setState({
    //   money
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
      money
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
      money
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
    <App />,
    document.getElementById('root')
  )
}

render()