import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export default function ShoppingCart(props) {

    
    return (
        <div className="container">
             <div>
               <p className ="p2" >עגלת המוצרים</p>
           </div>
            { props.listOfProducts.map((val,index) =>{ 
                return (
                    <div id="corse">
                    <p id="corseTitle"> {val.courseName}</p> 
                    <p id="corseDesc" > {val.description}</p> 
                        <div className="row">
                            <div className="col-6">
                    <p id="corsePrice" > {val.price} ₪ </p> 
                         </div>
                         <div className="col-6">
              < FontAwesomeIcon  className="fa-2x faCartRemove" icon={faTrashAlt} onClick={()=>{props.remove(index)}}/> 
           </div>
             </div>
             </div>
                )
            })}
        </div>
       
        )
    }
 