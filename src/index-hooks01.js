import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


let showFruit = true;
function App() {
  console.log('执行了')
  const [age, setAge] = useState(42);
  
  // hooks不能写在ifelse等条件语句里面，这样来确保hooks的执行顺序一致。

  // if(showFruit) {
  //   var [fruit, setFruit] = useState('banana');  
  //   showFruit = false;
  // }
  
  let [fruit, setFruit] = useState('banana');
  console.log('fruit', fruit)
 
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
      <div>age--{age}--- <button onClick={() => setAge(3333)}>setage</button></div>
      <div>fruit--{fruit}--- <button onClick={() => setFruit('apple')}>setFruit</button></div>
      <div>age--{todos[0].text}--- <button onClick={() => setTodos([{text: 'hooks22'}])}>setTodos</button></div>
    </div>
  )
}

//首次渲染会调用App,得到一个虚拟dom，当用户点击按钮改变值当时候，会重新调用APP, 重新渲染App.

ReactDOM.render(<App/>, document.getElementById('root'))