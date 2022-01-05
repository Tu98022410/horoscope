import React, {useState} from "react";
import ApiReq from './apireq'
import Select from './selector'
import { Sign } from "./sign";
import { Date } from "./date";

const Center2 = ( { date, setDate, sign, setSign} ) => {
    const SignDrophandler = (e) => {
    setSign(e.target.value)
  }

  const dateHandler = (e) => {
    setDate(e.target.value)
  }
    return(
        <div className='center'>
            <div className='con5'>
                <div className='hor'> HOROSCOPE </div>
            </div>
            <div className='con6'>
                <div className="textl">
                     Sign
                     <Sign SignDrophandler={SignDrophandler} sign={sign}/>
                </div>
                <div className='textl'>
                Date
                <Date dateHandler={dateHandler} date={date} />
                </div>
            </div>
        </div>
    )
}
export {Center2};