import {useEffect, useState} from "react";
import getInitialBoard from "./utils/getInitialBoard";
import {Board} from "./components/Board";
import swal from "sweetalert";
import {decideWinner, hasDecidedWinner} from "./utils/strategies/decideWinner";

function App() {

  const [ players , setPlayers ] = useState([
    {
        id : 1,
        name : 'O'
    },
    {
        id : 2,
        name : 'X'
    }
  ]);

      const [ turn , setTurn ] = useState(0);

      const [ board , setBoard ] = useState(getInitialBoard);
      const [ history , setHistory ] = useState([]);

      const handleClick = ( target= 0  ) => {
          if( canClickTargetBox(target)){

              let historyRecords = [];
              board.forEach( box => {
                  historyRecords.push({ checkedBy : box.checkedBy , hasChecked : box.hasChecked })
              })

              setHistory( prevHistory => {
                  let curHistory = { turn : turn , records : historyRecords}
                  return [ ...prevHistory , curHistory ];
              })

              setBoard( prevBoard => {
                  return board.map( (box,idx) => {
                      if(idx === target){
                          return { checkedBy: turn , hasChecked : true};
                      }
                      return box;
                  });
              });

              setTurn( prevTurn => {
                  return prevTurn === 0 ? 1 : 0
              });

          }

      }

      const canClickTargetBox = ( target = 0 ) => {
          let hasTargetChecked = board[target].hasChecked;
          return !hasTargetChecked;
      }

      const handleRestartGame = () => {
          swal({
              text : 'Are you sure to restart game?',
              icon : 'warning',
              buttons : ['No','Yes']
          }).then( isYes => {
              if( isYes ) {
                  setBoard(getInitialBoard);
                  setTurn(0);
                  setHistory([]);
              }
          })
      }

      const handleUndo = () => {
          if( history.length > 0 ){
              setTurn(history[history.length -1 ].turn);
              setBoard(history[history.length - 1 ].records);
              setHistory( prevHistory => {
                return prevHistory.slice(0,prevHistory.length -1 );
              })
          }else{
              setTurn(0);
              setBoard(getInitialBoard())
          }
      }

      const handleGameOver = ( winner = 0 ) => {

          swal({
              text : `Congratulation,${players[winner].name} won!!`,
              icon : 'success'
          }).then( () => {
              setBoard(getInitialBoard());
              setTurn(0);
              setHistory([]);
          });
      }

      useEffect(() => {
        let winner = decideWinner(board);
        if( hasDecidedWinner(winner) ){
          handleGameOver( winner );
        }
      },[board])

    return (
        <main className='container-fluid d-flex justify-content-center flex-column  align-items-center' id='playground'>
            <Board
                board={board}
                handleClick={handleClick}
                turn={turn}
            />
            <br/>
            <div className='d-flex justify-content-between gap-5'>
                <h5 onClick={handleRestartGame} className='fw-bold h5 btn btn btn-danger'  id='btn'>Restart Game</h5>
                <h5 onClick={handleUndo} className='fw-bold h5 btn btn-sm btn-warning' id='btn'>Undo</h5>
            </div>
        </main>
    )
}

export default App;
