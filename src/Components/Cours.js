import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


export default function Cours(props) {

   
    return (
        <div className="container">
            { props.cousres.map((val,index) =>{ 
                return (
                    <div id="corse">
             <p id="corseTitle"> {val.courseName}</p> 
             <p id="corseDesc" > {val.description}</p> 
             <div>
                 <div className="row">
                     <div className="col-6">
             <p id="corsePrice" > {val.price} ₪ </p> 
                  </div>
                  <div className="col-6">
           < FontAwesomeIcon className="fa-2x fabtnUser"  icon={faCartPlus}  onClick={()=>{props.add(index)}} />
           </div>
           </div>
           </div>
             </div>
             
                )
            })}
        </div>
       
        )
    }

