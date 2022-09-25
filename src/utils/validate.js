export function validate( keys = [] , data = {} ){
    let status = [];

    keys.forEach( (key,idx) => {
        if( data[key] == '' || data[key].length == 0 ){
            status.push(false);
        }else{
            status.push(true);
        }
    })

    return status;
}