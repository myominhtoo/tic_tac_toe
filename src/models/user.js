export var playerRecord = {
    win: 0,
    lose:0,
    draw:0
};

export const user = {
    id : null,
    name : '',
    email : '',
    password : '',
    records : playerRecord,
    rate : 0,
};


export const userKeys = ['name','email','password'];//to generate object for validation

