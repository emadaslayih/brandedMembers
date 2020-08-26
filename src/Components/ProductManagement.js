import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function ProductManagement(props) {

    const [flag,setFlag] = useState(false);
    const [courseName,setCourseName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');


    const addProductToList = () =>{ /* add new product ,send by props to the list of the products */
        
        let newProduct = [];
        newProduct = {courseName:courseName,description:description,price:price};
        props.addProductToList(newProduct);
        setFlag(!flag)
      }

    





   const show = ()=>{
        if(flag === true){
            return (
                <div id="corseInsert">
                    <div>
                    <div id="inputNameProduct">
                    <input onChange={(e)=>{setCourseName(e.target.value)}}/> שם מוצר
                    </div>
                    <div id="inputNameProduct">
                    <input id="inputDiscProduct" onChange={(e)=>{setDescription(e.target.value)}}/> תיאור מוצר
                    </div>
                    <div id="inputPriceProduct">
                    <input onChange={(e)=>{setPrice(e.target.value)}}/> מחיר מוצר
                    </div >
                    <button className="btn registerBtn" onClick={addProductToList}> הוספת מוצר</button>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className='container'>
                    <div>
                    < FontAwesomeIcon  className="fa-3x" id="fabtnPlus"  icon={faPlusCircle} onClick={()=>setFlag(!flag)} /> 
                      </div>
                </div>
            )
        }
    }
            
     


    return (
        <div className="container">
            <div className="col-12">
            <div>
               <p className ="p2" >ניהול מוצרים</p>
           </div>
<table>
  <thead>
    <tr>
      <th>הסרת מוצר</th> 
      <th>מחיר מוצר</th>
      <th>תיאור מוצר</th>
      <th>שם מוצר</th>
    </tr>
  </thead>
  <tbody>
  {props.productList.map((val,index) =>{  
                return (
                   
                    <tr>
                     <td>< FontAwesomeIcon className="fa-2x pointer"  icon={faTrashAlt} onClick={()=>{props.removeProduct(index)}} /> </td>
                     <td >  {val.price} ₪ </td> 
                     <td id="listProducts"> {val.description}</td> 
                     <td id="productName"> {val.courseName}</td> 
             
                 </tr>
               
                )})}
  </tbody>
</table>
</div>
<div>
    {show()}
</div>
</div>

    )}
    

