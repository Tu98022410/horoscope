import React from "react";
import '../App.css';

const Rbox = ({ data,color }) => {
    console.log(data)
    return(
        <div style={{"display" : "flex", "flexDirection" : "row"}}>
            <div className='Rbox' >
                <div className='border'>
                <div style={{"color" : data?.color}} > <div className='t' color >color</div> <div className="til"> {data?.color}</div> </div>
                </div>
            </div>
            <div className='Rbox' >
                <div className='border'>
                <div style={{"color":"#96E27B"}} > <div className='t'>luckytime</div> <div className="til"> {data?.lucky_time}</div> </div>
                </div>
            </div>
            <div className='Rbox' >
                <div className='border'>
                <div style={{"color":"#AD7A4B"}} > <div className='t'>lucky time</div> <div className="til" > {data?.lucky_number} </div></div>
                </div>
            </div>
            <div className='Rbox' >
                <div className='border'>
                <div style={{"color":"#74CCBC"}} > <div className='t'>mood</div>  <div className="til" >{data?.mood}</div> </div>
                </div>
            </div>
            <div className='Rbox' >
                <div className='border'>
                <div style={{"color":"#C65858"}} > <div className='t'>compatibility</div > <div className="til" > {data?.compatibility}</div> </div>
                </div>
            </div>
        </div>
    )
}

export {Rbox};