import React,{useState} from 'react'
import ProductManagement from './ProductManagement';
import UsersManagement from './UsersManagement';

export default function Admin(props) {

    const [showPage,setShowPage] = useState(0);


   const removeProductFromProducts =(index)=>{ /* send index by props to remove product from list products */
       props.removeProductFromProducts(index)
    }

    const addProductToList = (temp)=>{/*send new product object to the list products*/
        props.addProductToList(temp)
    }

    const removeUser = (temp)=>{/*send index by props to remove the user by admin from users list */ 
        props.removeUserFromList(temp)
    }

    const sortByAge = (flag) =>{
        props.sortByAge(flag)
    }

    const filterByAge = (element) =>{
        props.filterByAge(element)
    }


    const show = ()=>{
        debugger
        if(showPage === 0){
            
                debugger;          
               return (
                   <div>
                    <ProductManagement productList={props.product} addProductToList={addProductToList} removeProduct={removeProductFromProducts}/>
                   </div>
               )}
               else if(showPage === 1){
                return (
                    <div>
                    <UsersManagement users={props.users} filterByAge={filterByAge} removeUser={removeUser} sortByAge={sortByAge}/>
                    </div>
                )}
               }




    return (
        <div className ='container'>
            <div >
            <p className ="p2" >ברוכים הבאים לניהול המערכת</p>
            <button className="btn registerBtn"  onClick={()=>props.showPagelogin(1)}>יציאה</button>
            <button className="btn registerBtn" onClick={()=>setShowPage(0)} >ניהול מוצרים</button>
           <button className="btn registerBtn" onClick={()=>setShowPage(1)}  >ניהול חברים</button>
           <div>
           {show()}
           </div>
            </div>
        </div>
    )
}
