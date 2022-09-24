/*
 will return if has winner ,
 0 for player one , 1 for two
 null if has not winner
 */

import {boxStatus} from "../../models/boxStatus";
import {VictoryStatuses} from "../../constants/victoryStatuses";

export function decideWinner(board = [boxStatus] ){
    let winner = null;
    const status = {
        playerOne : '',
        playerTwo : '',
    };

    status.playerOne = getStatusForPlayer( board , 0);
    status.playerTwo = getStatusForPlayer( board , 1 );

    winner = getWinnerFromStatus( status.playerOne , status.playerTwo );

    return winner;
}

export function hasDecidedWinner( winner = {} ){
    if( winner == null ){
        return false;
    }
    return true;
}

// target is for which player
function getStatusForPlayer( board = [boxStatus] , target = 0 ){
    let status = '';
    board.forEach( (box,idx) => {
        if( box.checkedBy == target ){
            status += idx;
        }
    })

    return status;
}

function getWinnerFromStatus( playerOneStatus = '' , playerTwoStatus = '' ){
    let isPlayerOneWinner = isWinner(playerOneStatus);
    let isPlayerTwoWinner = isWinner(playerTwoStatus);
    return isPlayerOneWinner ? 0 : isPlayerTwoWinner ? 1 : null;
}

function isWinner( status = ''){
    let isWinner = false;
    /*
     old method
     */
    // VictoryStatuses.forEach(( victoryStatus) => {
    //     if( status.includes(victoryStatus) ) isWinner = true;
    // })

    for( let victoryStatus of VictoryStatuses ){
        if( isVictoryStatus( status , victoryStatus ) ) {
            isWinner = true;
            break;
        }
    }
    return isWinner;
}

function isVictoryStatus( status = '' , victoryStatus = '' ){
    let isVictoryStatus = false;
    let result = '';
    victoryStatus.split('')
        .forEach( victoryChar => {
            if(status.includes(victoryChar)){
                result += status[status.indexOf(victoryChar)];
            }
        })
    if( result === victoryStatus ) isVictoryStatus = true;
    return isVictoryStatus;
}