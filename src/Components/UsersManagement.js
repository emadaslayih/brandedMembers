import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function UsersManagement(props) {

    const [flag,setFlag] = useState(true);

    const  sortByAge = () =>{ /*send props flag status to sort by age */
      debugger;
      setFlag(!flag)
        props.sortByAge(flag)
    }

    const filterByAge = (element) =>{/*send element to sort by age */
        debugger;
        props.filterByAge(element.target.value)
    }

    return (
        <div className="container">
            <div className="col-12">
            <div>
               <p className ="p2" > ניהול חברי מועדון</p>
           </div>
           <div id="sortby">
                <input  className="sortbtn" onChange={filterByAge} /> סינון לפי גיל 
                <button className="sortbtn"  onClick={sortByAge} > מיון לפי גיל  </button>
            </div>
<table>
  <thead>
    <tr>
      <th>הסרת משתמש</th> 
      <th>מספר פלאפון</th>
      <th>גיל</th>
      <th>מייל</th>
      <th>שם מלא</th>
    </tr>
  </thead>
  <tbody>
  { props.users.map((val,index) =>{ 
                return (
                    <tr>
            <td>< FontAwesomeIcon  className="fa-2x pointer"  icon={faTrashAlt} onClick={()=>{props.removeUser(index)}} /></td>
             <td> {val.phone}</td> 
             <td> {val.age}</td> 
             <td> {val.mail}</td> 
             <td> {val.fullName}</td> 
             
                 </tr>
                )})}
  </tbody>
</table>
</div>
</div>

    )}
    
       
        
   
