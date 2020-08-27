import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Style/Style.css'
import LandingPage from './Components/LandingPage'
import LogInPage from './Components/LogInPage.js'
import background2 from './Images/background2.jpg';
import Title from './Components/Title';
import Succesful from './Components/Successful'


function App() {

  
  const [showPage,setShowPage] = useState(0);
  const [user,setUser] = useState([]);
  const [usersTemp,setUsersTemp] = useState(user);
  
  const createNewUser= (newUserArr)=>{
    debugger;
    user.push(newUserArr)
    setUser ([...user])
    setShowPage(1)
    setUsersTemp(user)
  }

  const showPagelogin= (index)=>{ /*switch page show */
    debugger;
    setShowPage(index)
  }

  const removeUserFromList =(index)=>{ /*remove user from list by admin*/
    debugger
    let tempArr = user.filter((val,i) => (i!=index));
    setUser ([...tempArr])
    setUsersTemp([...tempArr])
  }

  const sortUserByAge = (index) => {/*sort users list by age by admin */
    debugger;
    if (index === true){
      let temp1=[...user];
      temp1.sort((a, b) => (a.age < b.age) ? 1 : -1);
      setUser(temp1)
      }
      else if (index === !true){
        let temp1=[...user];
        temp1.sort((a, b) => (a.age > b.age) ? 1 : -1);
        setUser(temp1)
  }}

  const filterUserByAge =(element)=>{/*filter users list by admin */
    debugger;
    if ( element === ''){
      setUser(usersTemp)
    }
    else {
    let temp3 = user.filter((val,i) => (val.age > element));
    setUser(temp3)
  }}
  
  const showPageLandingPage = (index) =>{
  setShowPage(index)
  }


 
  const show = ()=>{
    if(showPage === 1){
        return (
            <div id="succesfulPage">
               <Succesful showPagelogin={showPagelogin} />
            </div>
        )
    }
     else if(showPage === 0){
      return (
        <div>
             <LandingPage newUser={createNewUser} users={user}  showPagelogin={showPagelogin} />
        </div>
    )}
    else if(showPage === 3){
      return (
        <div>
             <LogInPage users={user} removeUserFromList={removeUserFromList} showPageLandingPage={showPageLandingPage}filterUserByAge={filterUserByAge} sortUserByAge={sortUserByAge}/>
        </div>
    )}}
  

  return (
    <div  className="App" style={{ background:`url(${background2})`}} >
      <div className="container"  >
      <Title />
      <div className="opening">
      {show()}
      </div>
  </div>
    </div>
  )
}

export default App;
