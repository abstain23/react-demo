import React from 'react'
import {render} from 'react-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10,
      name: 'yy'
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count +1
    })
    console.log(this.state) //异步更新
  }
  handleClick2 () {
    /*在hanldeClick处理程序中调用了两次setState，但是render只执行了一次。因为React会将多个this.setState产生的修改放在一个队列里进行批延时处理。*/
    this.setState({
      count: 99
    })
    this.setState({
      name: 'iiii'
    })
  }
  handleClick3() {
    /*调用this.setState时，并没有立即更改this.state，所以this.setState只是在反复设置同一个值而已.*/
    this.setState({
      count: this.state.count +1
    })
    this.setState({
      count: this.state.count +1
    })
    this.setState({
      count: this.state.count +1
    })
    console.log(this.state)
  }
  increment(state, props) {
    return {
      count: state.count + 1
    }
  }
  handleClick4() {
    // render只执行一次。 13
    this.setState(this.increment)
    this.setState(this.increment)
    this.setState(this.increment)
    console.log(this.state)
  }
  handleClick5() {
    /**
     * 第一次执行setState，count为11，第二次执行，this.state仍然是没有更新的状态，所以this.state.count又打回了原形为10，加1以后变成11，最后再执行setState，所以最终count的结果是12。（render依然只执行一次）

     setState的第二个回调参数会在更新state，重新触发render后执行
     */
    this.setState(this.increment)
    this.setState({ count: this.state.count + 1 })
    this.setState(this.increment)
  }
  handleClick0() {
    this.state.count = 55
    this.forceUpdate() //加上这一句，强制视图更新
  }
  render() {
    console.log('render 1')
    return (
      <div>
        App--{this.state.count}
        <hr/>
        <button onClick={() => this.handleClick0() }>直接更改sate不会更新</button>
        <button onClick={() => this.handleClick() }>+1</button>
        <button id='btn'>+2</button>
        <button onClick={() => this.handleClick2() }>多个改变合并处理</button>
        <button onClick={() => this.handleClick3() }>多次修改一个值</button>
        <button onClick={() => this.handleClick4() }>使用函数作为参数更新</button>
        <button onClick={() => this.handleClick5() }>混合使用</button>
      </div>
    )
  }
  componentDidMount() {
   /*通过js的事件绑定程序 addEventListener 和使用setTimeout/setInterval 等 React 无法掌控的 APIs情况下，setState是同步更新state

    console.log('mounted 1')
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state)
    });
    */
    document.getElementById('btn').addEventListener('click', () => {
      // 这种方式会触发两次render
      this.setState({count: this.state.count + 2})
      this.setState({name: 'dadada'})
      console.log(this.state) //获取同步
    })
  }
}

render((
  <App>
  </App>
), document.getElementById('root'))