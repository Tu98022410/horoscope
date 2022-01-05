import React from "react";
import { Rbox } from "./right_box";
import '../App.css';

const Con2 = ({data}) =>{
    console.log(data)
    return(
        <dib className='con2'>
            <div className="hor" > HOROSCOPE</div>
            <div className='rl' >
                <Rbox data={data} />
            </div>
        </dib>
    )
}
export default Con2 ;