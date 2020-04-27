import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

const reducer = (state, action) => {
  console.log('reducer')
  if(!state) {
    return {n: 0}
  }
  if(action.type === 'add') {
    const newSate = {n:state.n + action.payload}
    return newSate
  } else {
    return state
  }
}

const store = createStore(reducer)


class Son extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        son --- 
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div >
        App -- {this.props.n}
        <hr/>
        <Son />
        <hr/>
        <button onClick={() => this.props.add(3)}>+ 1</button>
        <button onClick={() => {
          console.log('x')
          this.props.n += 3
          }}>test</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    n: state.n
  }
}

// const mapDIspatchToProps = () => {
//   return {
//     add: () => {
//       console.log('add')
//       return {type:'add', payload: 1}
//     }
//   }
// }

const mapDIspatchToProps = {
      add: (payload =1) => {
        console.log('add')
        return {type:'add', payload}
      }
  }
//connect连接React组件和Redux store，返回一个新的组件，这个组件放到provider里面后没，之前的App组件就可以通过props使用store
const App2 = connect(mapStateToProps, mapDIspatchToProps)(App)

const render = () => {
  //Provider实现store的全局访问，将store传给每个组件
  ReactDOM.render(
   <Provider store={store}>
      <App2 />
   </Provider>,
    document.getElementById('root')
  )
}
render()

// store.subscribe(() => {
//   console.log('subscribe')
//   render()
// })