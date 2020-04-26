import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Cell = (props) => {
  // const [n, steN] = React.useState('');
  // const handleClick = () => {
  //   props.onClick()
  // };
  return (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  );
};

const tell = (cells) => {
  for(let i=0;i<3;i++) {
    if(cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2] && cells[i][0] !== null) {
      return true
    }
  }

  for(let i=0;i<3;i++) {
    if(cells[0][i] === cells[1][i] && cells[0][i] === cells[2][i] && cells[0][i] !== null) {
      return true
    }
  }

  if(cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2] && cells[0][0] !== null) {
    return true
  }
  if(cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0] && cells[0][2] !== null) {
    return true
  }
  return false
}


const Wrapper = () => {
  // const [text, setText] = React.useState('')
  const [cells , setCell] = React.useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]) 
  const [n, setN] = React.useState(0)
  const [flag, setFlag] = React.useState(false)
  const handleCellClick = (row,col) => {
    // console.log('行'+ row)
    // console.log('列'+ col)
    setN(n + 1)
    // console.log(n)
    const deppCopyCell = JSON.parse(JSON.stringify(cells))
    deppCopyCell[row][col] = n % 2 === 0 ? 'x' : 'o'
    setCell(deppCopyCell)
    setFlag(tell(deppCopyCell))
    // console.log(flag)
  }
  return (
    <div className='wrapper'>
      {cells.map((items, row) => {
        return (
          <div className='row' key={row}>
            {items.map((item, col) => <Cell key={col} text={item} onClick= {() => handleCellClick(row, col)}/>)}
          </div>
        )
      })}
      {flag && <div className='game-over'>游戏结束</div>}
    </div>
  )
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
