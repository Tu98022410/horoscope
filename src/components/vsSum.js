import React from "react";
import '../App.css';


const VsAroow = ({handler}) =>{
    return(
        <div onClick={handler}  className='vsClick'></div>
    )
}
export {VsAroow};
