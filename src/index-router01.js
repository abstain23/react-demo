import React, {useState} from 'react'
import ReactDOM from 'react-dom'


function Home () {
  return(
    <div>主页</div>
  )
}

function About () {
  return(
    <div>关于</div>
  )
}

function  Mine() {
  return(
    <div>我的</div>
  )
}

function App() {
  const path = window.location.pathname
  let initUi
  switch (path) {
    case '/about' :
      initUi = 'about';
      break;
    case '/mine':
        initUi = 'mine';
        break;
    default:
        window.history.pushState(null, '', '/home')
        initUi = 'home'
  }
  const [ui, setUi] = useState(initUi)
  const change1 = () => {
    window.history.pushState(null, '', '/home')
    setUi('home')
  }
  const change2 = () => {
    window.history.pushState(null, '', '/about')
    setUi('about')
  }
  const change3 = () => {
    window.history.pushState(null, '', '/mine')
    setUi('mine')
  }
  const showUi = () => {
    switch (ui) {
      case 'about':
        return <About/>
      case 'mine':
        return <Mine/>
      default:
        return <Home/>
    }
  }
  return (
    <div>
      <button onClick={change1}>change home</button>
      <button onClick={change2}>change about</button>
      <button onClick={change3}>change mine</button>
      <hr/>
      {showUi()}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))