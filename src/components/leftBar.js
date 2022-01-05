import React, {useState} from "react";
import { CheckText } from "./checkText";
import { Check } from "../icon/check";
import { Check_green } from "../icon/check_green";
import { Bt } from "./button";
import { Check_orange } from "../icon/check_orange";
import '../App.css';

const LeftBar = () =>{
    const[toggle,setToggle] = useState(false)

    return(
        <div className='a' >
           {toggle ? <div className='a'> <div className='b'></div> <div className='ud'></div></div> :
            <div className='a'><CheckText Icon={Check} bigText='All Systems ' smallText='Normal' icon='' /> 
            <CheckText Icon={Check} bigText=' RENDEZVOUS BURN SLOW ' smallText='Normal' icon='' /> 
            <CheckText Icon={Check} bigText=' PREPARE RENDEZVOUS BURN ' smallText='Normal' icon='' /> 
            <CheckText color={"white"} Icon={Check_green} bigText='THERMAL SHIELD' smallText='Applied' icon='' /> 
            <CheckText Icon={Check} bigText='BURN Go/No-GO' smallText='Normal' icon='' /> 
            <CheckText color={"white"} Icon={Check_orange} bigText='POWER COMPLETION' smallText='Awaiting' icon='' /> 
            <CheckText Icon={Check} bigText='STATION DECK CHECK ' smallText='Normal' icon='' /> 
            </div >}
             <Bt toggle={toggle}  setToggle={setToggle}/>
        </div>
    )
}
export default LeftBar;
