/*
 position - string (e.g 1,1)
 hasChecked - boolean
 isO - boolean ( O or X)
 byWho - string ( id )
 */
import {useEffect} from "react";

export function Box(props ){

    const { position , checkedBy , hasChecked , handleClick , turn  } = props;

    const handleClickBox = ( target ) => {
        handleClick( target );
    }

    return (
       <div onClick={() => handleClickBox( position ) } className='bg-gray p-3 col-xl-3 rounded-3 d-flex justify-content-center align-items-center' id='box'>
           {
               hasChecked &&
               (
                   checkedBy == 0
                   ? < i className="fa-solid fa-o h1 text-primary icon"></i>
                   : <i className="fa-solid fa-xmark h1 text-danger icon"></i>
               )
           }
       </div>
    )
}