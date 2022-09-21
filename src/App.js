import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">

           <ExternalUsers></ExternalUsers>
   
    </div>

  );

}


        function ExternalUsers(){
          const [users, setUsers] = useState([])
        useEffect(()=>{

          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(data => setUsers(data))

        }, [])

  return (

    <div>
      <h1 >External Users </h1>
    {
        users.map(user=> <User name= { user.name} email ={user.email}> </User>)
    }
    </div>
  )
}

function User(props){

  return (
    <div style={{backgroundColor: "red", border : "10px solid black"}} >
      <h1>Name : {props.name} </h1>
      <h2>Email : {props.email} </h2>
    </div>
  )
}


























function Counter(){

  const [count , setCount] = useState(5)
  const increaseCount= () => setCount(count + 1);
  const decreaseCount= () => setCount(count - 1);

  //  {
  //   const [count , setCount] = useState(5)
  //   const increaseCount= () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>

      <h1>Count :{count} </h1>
    <button onClick={increaseCount}> Increase</button>
    <button onClick={decreaseCount}> Decrease</button>

    </div>

  )
}




export default App;









// function Person(props){
//   return (
//     <div>
//        <h1>Name : {props.name} </h1>
//       <h2>Address: {props.roll} </h2>  
//      </div>    
//   );
 
// }




 //part-1 here

  // const students =[
  //   {name :'abul' , roll : 32 , address : 'dhaka'},
  //   {name :'babul' , roll : 32 , address : 'dhaka'},
  //   {name :'cabul' , roll : 32 , address : 'dhaka'},
  //   {name :'dabul' , roll : 32 , address : 'dhaka'},
  //   {name :'mabul' , roll : 32 , address : 'dhaka'},

  // ]


  //part -2 here
      {/* {
           students.map(student => <Person name={student.name} roll= {student.address}></Person> )
      } */}