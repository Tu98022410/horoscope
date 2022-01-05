import React from "react";
import "../App.css"


const Date =({date,dateHandler}) =>{
    return(

        <select className='sel select' onChange={dateHandler} value={date}>
        <option value='Today'>Today</option>
        <option value='Yesterday'>Yesterday</option>
        <option value='Tomorrow'>Tomorrow</option></select>
    )
}
export{Date}