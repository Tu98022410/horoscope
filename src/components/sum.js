import React,{useState} from "react";
import '../App.css';

const Aroow =({vsHandler }) =>{
    return(
        <div onClick={vsHandler}  className='lClick'></div>
    )
}
export {Aroow} ;