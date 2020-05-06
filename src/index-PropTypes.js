import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'


// function App(props) {
//   console.log(React.Children)
//   console.log(props.children)
//   return (
//     <div>
//       <p>
//         {React.Children.map(props.children, (item, index) => {
//           return <span>{item} -- {index}</span>
//         })}
//       </p>
//       <p>{props.children[1]}</p>
//       app
//       <p>{props.children[0]}</p>
//     </div>
//   )
// }

class App extends React.Component {
  // 设置默认值
  static defaultProps = {
    name: 'App'
  }
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <p>这是默认值----{this.props.name}</p>
        <p>这是必须要传的title----{this.props.title}</p>
        <hr/>
        <p>
          {React.Children.map(this.props.children, (item, index) => {
            return <span>{item} -- {index}</span>
          })}
        </p>
        <p>{this.props.children[1]}</p>
        app
        <p>{this.props.children[0]}</p>
      </div>
    )
  }
}

render((
  <App title='title是必须要传的'>
    <span>span1</span>
    <span>span2</span>
  </App>
), document.getElementById('root'))