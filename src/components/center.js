import React, {useState}  from "react";
import Con2 from './con_2'

const Center = ({data}) => {
    return (
        <div className="center" >
            <Con2 data={data} />
          <div className='con3 tex '>Your busy lifestyle has been fun, but today it's time to slow down and just relax.</div>
        </div>
        )
    }
export {Center} ;