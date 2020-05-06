import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleString(),
      count:10
    }
  }
  inputRef = React.createRef()
  render() {
    console.log('render')
    return (
      <div>
        <Son/>
        <p ref={ele => this.ppRef = ele}>{this.state.time}</p>
      <p>{this.state.count}</p>
      <button onClick={() => this.setState({
        count: this.state.count + 1
      })}>+1</button>
      <div type="text" ref={this.inputRef}>111</div>
      </div>
    )
  }
  componentWillMount() {
    console.log('will')
    // setTimeout(()=>{
      this.setState({
        count: this.state.count + 1
      },()=>console.log('will2'))
    // }, 1000)
  }
  componentDidMount() {
    console.log('didmount')
    this.setState({
      count: this.state.count + 1
    })
    setInterval(()=>{
      // this.setState({
      //   time: new Date().toLocaleString()
      // })
      // this.refs.pp.innerHTML = new Date().toLocaleString()
      this.ppRef.innerHTML = new Date().toLocaleString()
      console.log(this.inputRef)
    },1000)
  }
}
class Son extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('cons')
  }
  componentWillMount() {
    console.log('son wil')
  }
  componentDidMount() {
    console.log('son mount')
  }
  componentWillReceiveProps() {
    console.log('willreceive')
  }
  render () {
    console.log('son render')
    return (
      <div>son</div>
    )
  }
}
render((
  <App>
  </App>
), document.getElementById('root'))