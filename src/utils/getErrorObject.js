export function getErrorObject( keys = [] ){
    let errorObject = {};
    keys.forEach( key => {
        errorObject[key] = { hasError : false , msg : '' };
    })
    return errorObject;
}

export function resetErrorObject( obj = {} ){
    let keys = Object.keys(obj);
    keys.forEach( key => {
        obj[key] = { hasError : false , msg : '' };
    })
}