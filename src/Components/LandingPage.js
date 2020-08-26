import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function LandingPage(props) {

    
    const [fullName,setFullName]=useState('');
    const [mail,setMail]=useState('');
    const [phone,setPhone]=useState('');
    const [age,setAge]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPass,setConfirmPass]=useState('');
    

    const createNewUser = () => {/*create new user object and added them to users array*/
               debugger;
        if (fullName.length >= 5 && mail.length >= 7 && phone.length === 10 && password.length >= 6  && password === confirmPass){
                
                let newUserArr = [];
                newUserArr = {fullName:fullName,mail:mail,age:age,phone:phone,password:password};
                props.newUser(newUserArr);
                alert ('ברוכים הבאים למועדון הלקוחות שלנו');
        }
        else if (fullName.length <= 4){
                    alert ('שם מלא חייב להיות יותר מ 5 אותיות')
        }
        else if (mail.length <= 6 ){
            alert ('מייל חייב להיות יותר מ 7 אותיות')
        }
        else if (phone.length > 9 || phone.length < 11 ){
            alert ('מספר פלאפון חייב להיות 10 ספרות בדיוק')
        }
        else if (password.length < 6 ){
            alert ('סיסמה חייבת להיות יותר מ 6 ספרות או אותיות')
        }
        else if (password !== confirmPass ){
            alert ('סיסמה ואישור סיסמה לא תואמות')
        }
    }

          return(   
            <div className="container">
                           <div className="row">                                    
                          <div className= "col-4 " >
                              <div id="benefitsList">
                       <ul>
                          <li className="benefitsList">הנחות על מגוון קורסים<br/> לקידום האתר והאפליקציה שלכם</li><br/>
                          <li className="benefitsList">הטבות ומבצעים על פירסום ב Facebook/Google<br/>/Instagram</li><br/>
                          <li className="benefitsList">מחירים מיוחדים <br/>לבניית אפלקיציה או אתר נוסף</li><br/>
                      </ul>
                      </div>
                      </div>
                        <div className="col-8">
                              <div id="inputsRegistration">
                 <h3 className="p1" id="p2">להרשמה עכשיו</h3>
                 <input className="inputregester" onChange={(e)=>{setFullName(e.target.value)}} placeholder="שם מלא" type="text" />  <br/>
                 <input className="inputregester" onChange={(e)=>{setMail(e.target.value)}} placeholder="מייל"type="text" /><br/>
                 <input className="inputregester" onChange={(e)=>{setPhone(e.target.value)}} placeholder="מס' פלאפון"type="text"/> <br/>
                 <input className="inputregester" onChange={(e)=>{setAge(e.target.value)}} placeholder="גיל"type="text"/> <br/>
                 <input className="inputregester" onChange={(e)=>{setPassword(e.target.value)}} placeholder="סיסמה"type="password"/> <br/>
                 <input className="inputregester" onChange={(e)=>{setConfirmPass(e.target.value)}} placeholder="אימות סיסמה" type="password" /><br/>
                <button className="btn registerBtn" onClick={createNewUser}  >מעוניין להצטרף</button>
                 <button className="btn registerBtn" type="button" onClick={()=>{props.showPagelogin(3)}} > כניסה לאתר</button> 
                 </div>
                </div>
                </div>
                          </div>
          )
        }
      

    
