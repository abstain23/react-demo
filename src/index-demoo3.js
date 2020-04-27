import React, { useState, createElement } from 'react';
import ReactDOM from 'react-dom';

// let n = 0;

// const handleClick = () => {
//   n += 1;
//   render()
// };

// render()

// function render() {
//   // const p = createElement('p', null, n);
//   // const Button = createElement('button', { className: 'button' }, '+1');
//   // const Div = createElement('div', { onClick: handleClick }, p, Button);
//   ReactDOM.render(<div>
//                     <p>{n}</p>
//                     <button onClick={handleClick}>+1</button>
//                   </div>, 
//                 document.getElementById('root'));
// }


// 老版本使用class

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        name: 'xxxx'
      }
      // this.fn = this.fn.bind(this)
    }
    fn() {
      this.setState({
        name: 'yyyyy'
      })
    }
    render() {
      return(
        <div>
          App
          <Foo name={this.state.name} fn={() => this.fn()}/>
          {/* <Foo name={this.state.name} fn={this.fn}/> 这种方式要自己手动绑定this */}
        </div>
      )
    }
  }
  
  function Foo(props) {
    return(
      <div onClick={props.fn}>
        Foo {props.name}
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))




// 新版useState
// function App() {
//   const [name, setName] = useState('name1111')
//   const fn = () => {
//     setName('name22222')
//   }
//   return(
//     <div>
//       App
//       <Foo name={name} fn={fn}/>
//     </div>
//   )
// }

// function Foo(props) {
//   return(
//     <div onClick={props.fn}>
//       Foo {props.name}
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))
