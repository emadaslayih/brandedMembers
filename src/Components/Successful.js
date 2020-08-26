import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Successful(props) {
    return (
        <div className="container">
            <div >
            <p className ="p2" >
            נרשמת בהצחה 
            </p>
            <button className="btn registerBtn" type="button" onClick={()=>{props.showPagelogin(3)}} > כניסה לאתר</button> 
            </div>
        </div>
    )
}
