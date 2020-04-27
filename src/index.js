import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const ThemeContext = React.createContext()


function Box(props) {
  console.log(props.children)
  return (
  <div className={`${props.theme}`}>{props.children}</div>
  )
}

function Button() {
  return (
    <button>+1</button>
  )
}

function Input() {
  return (
    <input></input>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: 'red'
    }
  }
  change() {
    if(this.state.theme === 'red') {
      this.setState({
        theme: 'green'
      })
    } else {
      this.setState({
        theme: 'red'
      })
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.change.bind(this)}>change theme</button>
        <div>
          <ThemeContext.Consumer>
            {(theme) => (
              <div>
              <Box theme={theme}>
                <Button></Button>
              </Box>
              <Box theme={theme}>
                <Input></Input>
              </Box>
              </div>
          )}
          </ThemeContext.Consumer>
        </div>
      </ThemeContext.Provider>
    )
  }
}





ReactDOM.render(<App/>, document.getElementById('root'))