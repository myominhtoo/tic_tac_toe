import {boxStatus} from "../models/boxStatus";

export default function getInitialBoard(){
    let i = 0;
    const result = [];
    while( i < 9 ){
        result.push(boxStatus)
        i++;
    }
    return result;
}