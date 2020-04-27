import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function F1(props) {
  return (
    <div className='border'>
      111
      <F2 />
    </div>
  )
}

function F2(props) {
  return (
    <div className='border'>
      222
      <F3 />
    </div>
  )
}

function F3(props) {
  return (
    <div className='border'>
      333
      <NContext.Consumer>
        {(n) => <F4 n4={n} />}
      </NContext.Consumer>
    </div>
  )
}

function F4(props) {
  return (
    <div className='border'>
      444 {props.n4.n}
      <button onClick={props.n4.setN}>++</button>
    </div>
  )
}

const NContext = React.createContext(100)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      x: {
        n: 100,
        setN:() => {
          // console.log(...this.state.x)
          this.setState({
            x: {
              ...this.state.x,
              n: this.state.x.n + 1
            }
          })
        }
      }
    }
  }
  render() {
    return(
      <div>
        <NContext.Provider value={this.state.x}>
          <F1 />
        </NContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))