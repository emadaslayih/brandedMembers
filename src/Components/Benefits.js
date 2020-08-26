import React from 'react'

export default function Benefits(props) {

   
    return (
        <div>
            { props.benefits.map((val) =>{ 
                return (
                    <div id="corse">
             <p id="corseTitle"> {val.benefitName}</p> 
             <p id="corseDesc" > {val.benefitDes}</p> 
             <div>
           </div>
             </div>
             
                )
            })}
        </div>
       
        )
    }
