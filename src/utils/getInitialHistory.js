import {boardHistory} from "../models/boardHistory";

export default function getInitialHistory(){
    let history = [];
    history.push(boardHistory)
    return history;
}