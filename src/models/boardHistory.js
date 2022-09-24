import {record} from "./record";

export const boardHistory = {
    records : getRecords(),
    turn : 0,
}

function getFalse(){
    let result = [];
    let i = 0;
    while( i < 9 ){
        result.push(false);
        i++;
    }
    return result;
}

function getRecords(){
    let records = [];
    let i = 0;
    while( i < 9 ){
        records.push(record);
        i++;
    }
    return records;
}