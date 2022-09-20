import logo from './logo.svg';
import './App.css';

function App() {

  const students =[
    {name :'abul' , roll : 32 , address : 'dhaka'},
    {name :'babul' , roll : 32 , address : 'dhaka'},
    {name :'cabul' , roll : 32 , address : 'dhaka'},
    {name :'dabul' , roll : 32 , address : 'dhaka'},
    {name :'mabul' , roll : 32 , address : 'dhaka'},

  ]
  return (
    <div className="App">
      {
       
           students.map(student => <Person name={student.name} roll= {student.address}></Person> )
      }
    </div>

  );

}

function Person(props){
  return (
    <div>
       <h1>Name : {props.name} </h1>
      <h2>Address: {props.roll} </h2>  
     </div>    
  );
 
}




export default App;
