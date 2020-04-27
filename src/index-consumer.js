import React from 'react'
import ReactDOM from 'react-dom'


function Consumer(props) {
  let res = props.children(100)
  return(
  <div>Consumer--{res}</div>
  )
}

// function x(n) {
//   console.log('x')
//   console.log(n)
// }

function Cc(props) {
  return (
  <div>{props.n}</div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.c = 100
  }
  render() {
    return (
      <Consumer>
        {(x) => <span>{x}</span>}
      </Consumer>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))