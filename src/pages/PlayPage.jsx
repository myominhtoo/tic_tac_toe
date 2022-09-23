import {useEffect, useState} from "react";
import {boxStatus} from "../models/boxStatus";
import {Board} from "../components/Board";

export function PLayPage(){

    const [ players , setPlayers ] = useState([
        {
            id : 1,
            name : 'Lionel Cain'
        },
        {
            id : 2,
            name : 'Mike'
        }
    ]);

    const [ turn , setTurn ] = useState(0);

    const [ board , setBoard ] = useState(() => {
        let i = 0;
        let result = [];
        while( i < 9){
            result.push(boxStatus)
            i++;
        }
        return result;
    });

    const handleClick = ( target= 0  ) => {

        if( canClickTargetBox(target)){
            let resultBoard = board;
            resultBoard[target] = { checkedBy : turn , hasChecked: true }
            setTurn( prevTurn => {
                return prevTurn === 0 ? 1 : 0
            });
            setBoard(resultBoard);
        }

    }

    const canClickTargetBox = ( target = 0 ) => {
        let hasTargetChecked = board[target].hasChecked;
        return !hasTargetChecked;
    }

    useEffect(() => {

    },[]);

    return (
        <main className='container-fluid d-flex justify-content-center align-items-center' id='playground'>
            <Board
                board={board}
                handleClick={handleClick}
                turn={turn}
            />
        </main>
    )
}