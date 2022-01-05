import React from "react";
import "../App.css"


const Sign = ({sign, SignDrophandler}) =>{
    return (
        <select className='sel select ' onChange={SignDrophandler} value={sign}>
        <option value='Aries' >Aries</option>
        <option value='Taurus'>Taurus</option>
        <option value='Gemini'>Gemini</option>
        <option value='Cancer'>Cancer</option>
        <option value='Leo'>Leo</option>
        <option value='Virgo'>Virgo</option>
        <option value='Libra'>Libra</option>
        <option value='Scorpio'>Scorpio</option>
        <option value='Sagittarius'>Sagittarius</option>
        <option value='Capricorn'>Capricorn</option>
        <option value='Aquarius'>Aquarius</option>
        <option value='Pisces'>Pisces</option>
     </select>
    )
}
export {Sign}