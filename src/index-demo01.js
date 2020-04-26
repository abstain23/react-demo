import React from 'react'
import ReactDOM from 'react-dom'
console.log('hh');


// const div = ( //虚拟dom
//             React.createElement('div', null,
//               React.createElement('p', null,
//                 React.createElement('span', null, 'span')))
//             )

const Header = (
  <header>
    this is header
  </header>
)

const Header2 = function(props) {
  return (
    <header>
      this is header props {props.name}
    </header>
  )
}

const Button = (
  <span>
  <button onClick={function() {console.log('111')}}>
    button +1
  </button>
  </span>
)

const Button2 = function() {
 let [n, setN] = React.useState(0)
  // let n = 1
  return(
    <span>
      {n}
      <button onClick={function(){
       setN(n + 1)
       console.log(n)
      }}>+ 1</button>
    </span>
  )
}

const Bottom = (
  <div>
    bottom
  </div>
)

class Bottom2 extends React.Component {
  render() {
    return (
      <div> bottom222222</div>
    )
  }
}



const div = (
  <div>
    {Header}
    {Header2({name: 'cc'})}
    <Header2 name='dd' />
    <p>
      <span>hi span</span>
      {Button}
      <Button2 />
    </p>
    {Bottom}
    <Bottom2 />
  </div>
)


console.log(div)

ReactDOM.render(div, document.getElementById('root'))


// function c(tagName, children) {
//   const ele = document.createElement(tagName);
//   if (children) {
//     if (typeof children === 'string') {
//       children = document.createTextNode(children);
//     }
//     ele.appendChild(children);
//   }
//   return ele;
// }
