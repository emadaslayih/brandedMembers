import React,{useState} from 'react'
import Cours from '../Components/Cours'
import 'bootstrap/dist/css/bootstrap.css';
import Benefits from '../Components/Benefits'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ShoppingCart from './ShoppingCart';
export default function HomePage(props) {

    
    const [showPage,setShowPage] = useState(0);
    const [flag,setFlag] = useState(true);
    const [productsOfUser,setProductsOfUser]= useState([])

  
const sortByPrice =() =>{/*check flags status and sort list products by price according flag status*/
    debugger;
    if (flag === true){
    let temp1=[...props.product];
    temp1.sort((a, b) => (a.price < b.price) ? 1 : -1);
    props.sortByPrice(temp1)
    setFlag(!flag)
    }
    else if (flag === !true){
    let temp2=[...props.product];
    temp2.sort((a, b) => (a.price > b.price) ? 1 : -1);
    props.sortByPrice(temp2)
    setFlag(!flag)
}}



const filterByName =(element) =>{/*get element from inpust and filter list products according the element*/
    debugger;
    if ( element.target.value === ''){
        props.filterByName(props.productsTemp)
    }
    else {
                   let temp3 = props.product.filter((val,i) => (val.courseName === element.target.value));
                   props.filterByName( temp3)
    }
}

const addProduct = (index) => {/*user add new product to shopping cart*/
debugger
let temp5 = props.product[index]
productsOfUser.push(temp5)
alert('המוצר נוסף בהצלחה')
}

const removeProductUser =(index) =>{/*user remove product from shopping cart*/
debugger
    let temp = productsOfUser.filter((val,i) => (i!=index));
    setProductsOfUser(temp)
}


    const show = ()=>{
        debugger
        if(showPage === 0){
            
                debugger;          
               return (
                   <div>
              <div id="sortby">
                <input  className="sortbtn" onChange={filterByName}/>  סינון לפי שם 
                <button className="sortbtn" onClick={sortByPrice}> מיון לפי מחיר  </button>
            </div>
            <div>
             <Cours cousres={props.product} add={addProduct} />
            </div>
            </div>
               )}
    
    else if(showPage === 1){
        return(
            
            <div >
              <Benefits  benefits={props.benefits}/>
            </div>
        )}
        else if(showPage === 2){
            return(
                <div >
                  <ShoppingCart listOfProducts={productsOfUser} remove={removeProductUser}/>
                </div>
            )}
            }

    return (
        <div className="container">
            <div >
           <p className ="p2"> {props.name} שלום </p> 
           <p className ="p2">ברוכים הבאים למועדון הלקוחות שלנו</p>
           <button className="btn registerBtn"  onClick={()=>props.showPagelogin(1)}>יציאה</button>
           <button className="btn registerBtn"  onClick={()=>setShowPage(1)}>הטבות ומבצעים</button>
           <button className="btn registerBtn"  onClick={()=>setShowPage(0)} >קורסים</button>
            < FontAwesomeIcon  className="fa-2x faShoppingCart" icon={faShoppingCart} onClick={()=>setShowPage(2)} />
           <div>
           {show()}
           </div>
           </div>
           </div>
        
    )
}
