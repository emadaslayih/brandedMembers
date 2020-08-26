import React from 'react'
import Logo from '../Images/logo.png'


export default function Title() {
    return (
        <div className="container">
            <div className="row">
      <div className="col-8 " id="p1">
                <p className ="p1" >
                מיזם חדש ובלעדי לחברי מועדון של חברת .Branded 
                </p>
                <p className ="p1" >
                  מועדון הלקוחות הוקם במטרה להעניק לחברי המועדון עדכונים והטבות שונות   
                </p>
            </div>
            <div  className="col-4" >
      <img id="barndedlogo"  alt="Branded logo" src={Logo}/>
      </div>
            </div>
        </div>
    )
}
