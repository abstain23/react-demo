import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, bindActionCreators} from 'redux'
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

const store = createStore(reducer) //reducer就是根据旧的state生成存的state


class Son extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        son --- {this.props.n}
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
        <Son n={this.props.n}/>
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


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps) //自己身上的props
  return {
    n: state.n
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => {
      console.log('add')
      console.log('dispacth', ownProps)
      return dispatch({type:'add', payload: 1})
      // const addDis = () => ({ type: 'add',  payload: 1})
      // return bindActionCreators({addDis}, dispatch)
    }
  }
}

// const mapDispatchToProps = {
//       add: (payload =1) => {
//         console.log('add')
//         return {type:'add', payload}
//       }
//   }
//connect连接React组件和Redux store，返回一个新的组件，这个组件放到provider里面后没，之前的App组件就可以通过props使用store
const App2 = connect(mapStateToProps, mapDispatchToProps)(App)
//mapStateToProps 只能是一个函数，第一个默认参数是state， 第二个为自身当属性，mapDispatchToProps可以是函数也可以是对象，当是函数时，第一个默认参数为dispatch，第二个为自身属性对象

const render = () => {
  //Provider实现store的全局访问，将store传给每个组件
  ReactDOM.render(
   <Provider store={store}>
      <App2 own={'sss'} />
   </Provider>,
    document.getElementById('root')
  )
}
render()

// store.subscribe(() => {
//   console.log('subscribe')
//   render()
// })