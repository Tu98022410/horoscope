import  React from "react";
import '../App.css';
 
const Bt =({toggle, setToggle}) =>{

    // toggle state
    // toggle ? 'className' : 'className1'

    const showSystem = () => {
        setToggle(false)
    }
     const showCabin = () => {
         setToggle(true)
     }
    return(
        <div className='bt'>
            <div className='q'>
            <button className={toggle ? 'nu':  'ac'} onClick={showSystem} >SYSTEMS</button>
            <button className={toggle ? 'ac':  'nu'} onClick={showCabin} >CABIN</button>
            </div>
            {/* {toggle ? <div className='bt'></div> : <div></div>} */}
        </div>
    )
}
export {Bt};