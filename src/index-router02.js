import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <div>主页</div>;
}

function About() {
  return <div>关于</div>;
}

function Mine() {
  return <div>我的</div>;
}

function App() {
  return (
    <div>APP</div>
  );
}

ReactDOM.render( 
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to='/'>app </Link></li>
          <li><Link to='/hone'>home </Link></li>
          <li><Link to='/about'>about </Link></li>
          <li><Link to='/mine'>mine </Link></li>
        </ul>
      </nav>
      <main>
        <Route path='/' component={App} exact />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/mine' component={Mine} />
      </main>
    </div>
  </Router>, document.getElementById('root'));
