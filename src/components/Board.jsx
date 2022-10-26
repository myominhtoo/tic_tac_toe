import {Box} from "./Box";

export function Board( { board = [] , handleClick , turn = 0 } ){
    return(
        <div className='w-50 row gap-2 rounded-1 d-flex justify-content-center flex-wrap h-auto p-5 bg-dark'  >
            { board.map( (box,idx) => {
                return (<Box
                    turn={turn}
                    checkedBy={box.checkedBy}
                    position={idx}
                    hasChecked={box.hasChecked}
                    key={idx}
                    handleClick={handleClick}
                />)
            })}
        </div>
    )
}