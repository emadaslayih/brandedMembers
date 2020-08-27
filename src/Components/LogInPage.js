import React,{useState} from 'react'
import HomePage from '../Components/HomePage'
import Admin from './Admin';

export default function LogInPage(props) {

    const [fullName,setFullName]=useState('');
    const [password,setPassword]=useState('');
    const [showPage,setShowPage] = useState(1);
    const [place,setPlace] = useState('');
    const [products,setProducts]= useState([{courseName:'קידום אורגני SEO',
    description:'SEO (ראשי תיבות של Search Engine Optimization) אופטימיזציה עבור מנועי החיפוש. ( מונח מקצועי עבור שירותי קידום אתרים אורגני בגוגל ) טכניקת קידום עבור התאמת קוד ומבנה אתר אינטרנט לדרישות ולאופן בו מנועי החיפוש סורקים את אתרי האינטרנט.',
    price:'299'},
    {courseName:'קורס שיווק בפייסבוק',
    description:'תקבלו שליטה מוחלטת ביסודות השיווק הדיגיטלי , נספק לכם את הידע והכלים הנדרשים לקידום אתר אינטרנט במתן ביצועים מקסימלים',
    price:'249'},
    {courseName:'קורס שיווק באינסטגרם',
    description:'אינסטגרם הוא כלי חברתי כיפי אך עוצמתי במיוחד, שמאפשר לכם לשווק את העסק שלכם למאות לקוחות חדשים בכל יום! בואו ללמוד איך להגיע ליותר מ-200 מיליון משתמשי אינסטגרם וליצור אסטרטגיות מכירה שיתרגמו את העוקבים שלכם להכנסות.',
    price:'149'},
    {courseName:' קורס Google Ads. ',
    description:' הלקוחות יראו אתכם כשהם יחפשו עסקים כמו שלכם בחיפוש Google ובמפות Google. אתם משלמים רק על תוצאות, כמו קליקים באתר או שיחות לעסק. ',
    price:'289'}])
    const [productsTemp,setProductsTemp] = useState(products);
    const [benefits,setBenefits] = useState([{benefitName:'הטבה בשווי 1000 ₪',benefitDes:'הטבה בשווי 1000 ש"ח לבניית אפליקציה או אתר'},
    {benefitName:'מבצע מיוחד',benefitDes:'בנה אפליקציה או אתר וקבל מאיתנו 2 מהקורסים שלנו בחינם'}]);

    const checkUser= ()=>{ /*login to admin page*/
        debugger;
        if (fullName === 'admin' && password === 'admin'){
            setShowPage(2);
        }
        else {
                    for (let i=0 ; i < props.users.length ;i ++){ 
           
             if (fullName === props.users[i].fullName && password === props.users[i].password){
                setPlace(i);
                setShowPage(0);
             }
             else if (fullName === props.users[i].fullName && password != props.users[i].password){
                 alert('הסיסמה שלך שגויה')
             }
             else if (fullName != props.users[i].fullName && password === props.users[i].password){
                alert('שם משתמש שלך שגוי')
             }}}}   
             

            const sortByPrice = (temp) =>{ /* new array sorted by price*/
                debugger;
                setProducts(temp)
            }

            const filterByName = (temp) =>{/*new array filtered by name*/
                debugger;
                setProducts(temp)
            }
        
      
            const addProductToList = (product) =>{/*add new product to products list*/
                debugger;
                let temp = product;
                products.push(temp)
                setProducts([...products])
                setProductsTemp([...products])
            }

            const removeProductFromProducts = (index) =>{/*remove product from products list*/
                let temp = products.filter((val,i) => (i!=index));
                setProducts(temp)
                setProductsTemp(temp)
            }

            const showPagelogin = (index) =>{
                
                setShowPage(index)
            }

            const removeUserFromList = (index) =>{/* remove user from users list*/

                props.removeUserFromList(index)
            }

           const sortUserByAge =(falgtemp)=>{/*flag status to sort users list by age*/
               props.sortUserByAge(falgtemp)
           }

           const filterUserByAge =(element)=>{/*filterd users list by age*/
               debugger;
               props.filterUserByAge(element)
           }


       const show = ()=>{
        if(showPage === 1){
            return (
                <div >
                <div >
                <div className="col-12" id="loginInputs" >
                     <h3 className="p1"  id="p2">כניסה לאתר</h3>
                     <input className="inputLogin" onChange={(e)=>{setFullName(e.target.value)}}  type="text"/>שם מלא    <br/>
                     <input className="inputLogin" id ="passLogInInput"onChange={(e)=>{setPassword(e.target.value)}} type="password" /> סיסמה<br/>
                     <button className="btn registerBtn inputLogin" onClick={()=>{props.showPageLandingPage(0)}} > חזרה לדף הרשמה</button> 
                     <button className="btn registerBtn inputLogin" onClick={checkUser} > כניסה</button> 
                     </div>
                     </div>
                     </div>
            )
        }
         else if(showPage === 0){
          return(   
               <div>
         <HomePage name={props.users[place].fullName} index={place} product={products} benefits={benefits} productsTemp={productsTemp} filterByName={filterByName} sortByPrice = {sortByPrice } showPagelogin={showPagelogin}/>
         </div>
              )}
              else if (showPage === 2){
                  return(
                      <div>
                          <Admin showPagelogin={showPagelogin} sortByAge={sortUserByAge} filterByAge={filterUserByAge} users={props.users} removeUserFromList={removeUserFromList} product={products} users={props.users} addProductToList={addProductToList} removeProductFromProducts={removeProductFromProducts}/>
                      </div>
                  )
              }
              
            }





              return (
                <div>
        {show()}
                </div>
                   
                    
                    )
              }
