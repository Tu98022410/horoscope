import React from "react";
import '../App.css';


const CheckText = ({Icon,bigText,smallText, color = 'rgba(148, 153, 195, 0.5);'}) =>{
    return(
        <div className='box'>
            <Icon className='con'/>
            <div className='con1'>
            <div className="bigText" >{ bigText }</div>
            <div style={{color: color}} className="smallText" >{ smallText }</div>
            </div>
        </div>
    )
}
export {CheckText};