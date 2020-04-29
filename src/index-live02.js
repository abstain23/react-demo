import React from "react";
import ReactDOM from "react-dom";
import './index.css'


class Papa extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSon: true,
      word: '初始值'
    }
  }
  change() {
    this.setState({
      ...this.state,
      word:'change了'
    })
  }
  render() {
    return (
      <div>
        Papa
        <button onClick={() => this.change()}>changeWord</button>
        <hr/>
        <App word={this.state.word}/>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 1
    }
    console.log('1.create， 组件初始化props state')
  }

  static getDerivedStateFromProps(nextProps, state) {
    console.log('nextprops', nextProps)
    console.log('state',state)
    return null
  } 
  // UNSAFE_componentWillMount() {
  //   console.log('2. 组件将要挂载')
  // }
  render() {
    console.log('3.render，相当于挂载')
    return (
      <div className='app'>
          {this.state.n}
          <br />
          <button onClick={() => this.onClick() }>+1</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('4.挂载完成')
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log(nextProps,nextState)
    console.log('5. 询问组件是否需要更新') //在这里可以根据自己的需求来更新
    if(nextState.n % 2 ===0) {
      return true
    } 
    return false
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log(`组件将要更新的值:${nextProps},${nextState}`)
  //   console.log('6.组件将要更新，更新的时候会再次render')
  // }

  componentDidUpdate(nextProps, nextState) {
    console.log(`组件更新成功后:${nextState}`)
    console.log('7.组件更新完成后')
  }
   //这是即将废弃的api
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log(this.props)
  //   console.log(`这是即将更新的props:${nextProps}`)
  //   console.log('props更新了，接下来会询问组件是否需要更新')
  // }
  onClick() {
    console.log('click')
    this.setState({
      n: this.state.n + 1
    })
  }
}




ReactDOM.render(<Papa/>, document.getElementById('root'))