import { useState } from 'react';
function Square({value,onHandle}){
  return <button className="mySquare" onClick={onHandle}>{value}</button>
}

export default function Game(){
   const [squares,setSquares] = useState(Array(9).fill(null));
   const [values,setValues] = useState(false)

    function onHandle(i){
        if (judgeWin(squares) || squares[i]) {
            return;
        }
       const nextSquares = squares.slice();
       if(!values){
           nextSquares[i] = "X";
           setValues(true)
       }else{
           nextSquares[i] = "O"
           setValues(false)
       }
       setSquares(nextSquares)
    }
    const winner = judgeWin(squares)
    let status;
    if(winner){
        status = "WInner is :" + winner
    }else{
        status = "the next player is "+(values?"O":"X")
    }

    return (
      <>

          <div>
              <Square value={squares[0]} onHandle={() =>onHandle(0)}/>
              <Square value={squares[1]} onHandle={() =>onHandle(1)}/>
              <Square value={squares[2]} onHandle={() =>onHandle(2)}/>

          </div>
          <div>
              <Square value={squares[3]} onHandle={() =>onHandle(3)}/>
              <Square value={squares[4]} onHandle={() =>onHandle(4)}/>
              <Square value={squares[5]} onHandle={() =>onHandle(5)}/>
          </div>
          <div>
              <Square value={squares[6]} onHandle={() =>onHandle(6)}/>
              <Square value={squares[7]} onHandle={() =>onHandle(7)}/>
              <Square value={squares[8]} onHandle={() =>onHandle(8)}/>
          </div>

          <div>
              {status}
          </div>
      </>
  )
}
function judgeWin(squares) {
    const winRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winRows.length; i++) {
        const [a, b, c] = winRows[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // 返回 "X" 或 "O"
        }
    }

    return null;
}
