

import { useState } from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default function Board()
{

  const initialValue=[
    null,null,null,
    null,null,null,
    null,null,null
    ];
 

    function handleClick(i){
     if (calculateWinner(value)){
      return;
     }
      let valueCopy=value.slice();
      if(isONext){
        valueCopy[i]="O";
        setIsONext(false);
      }
      else{
        valueCopy[i]="X";
        setIsONext(true);
      }
      
      
     setValue(valueCopy);
      }
    const [value,setValue]=useState(initialValue);
    const[isONext,setIsONext]=useState(false);
    const status = 'Next player:' + (isONext ? "O" : "X");
    const winner=calculateWinner(value);
  
        return (
          <div>
            <div className="status">{winner?("winner is"+winner):status}</div>
            <div className="board-row">
                <Square value={value[0]} onClick={()=>{handleClick(0)}}/>
                <Square value={value[1]} onClick={()=>{handleClick(1)}}/>
                <Square value={value[2]}onClick={()=>{handleClick(2)}}/>
              
            </div>
            <div className="board-row">
            <Square value={value[3]}onClick={()=>{handleClick(3)}}/>
            <Square value={value[4]}onClick={()=>{handleClick(4)}}/>
            <Square value={value[5]}onClick={()=>{handleClick(5)}}/>
            </div>
            <div className="board-row">
            <Square value={value[6]}onClick={()=>{handleClick(6)}}/>
            <Square value={value[7]}onClick={()=>{handleClick(7)}}/>
            <Square value={value[8]}onClick={()=>{handleClick(8)}}/>
            </div>
          </div>
    );
}