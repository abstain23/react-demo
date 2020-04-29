import React,{useState} from 'react'
import ReactDOM from 'react-dom'



function App() {
  console.log('app 被render了')
  const [count, setCount] = useState(0)
  const [studentInfo, setStudentInfo] = useState({name: '小文', age: 18, gender: '女'})
  const handleClick = () => {
    setCount(preCount => {
      console.log(preCount)
      return preCount += 1
    })
  }
  const handleClick2 = () => {
    setStudentInfo(old => {
      console.log(old)
      return {
        ...old,
        age: 22
      }
    })
  }
  const handleClick3 = () => {
    setTimeout(() => {
      alert('You clicked on: ' + count)
    }, 3000)
  }
  return(
    <div>app
      <p>{count}</p>
      <p>{`${studentInfo.name}--- ${studentInfo.age} --- ${studentInfo.gender}`}</p>
      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}>click</button>
      <hr />
      <button onClick={() => setCount(count + 1)}>sync  click</button>
      <button onClick={() => handleClick3()}>async  click</button>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)