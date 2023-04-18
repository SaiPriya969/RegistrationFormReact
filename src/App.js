
import { useState } from 'react';
import './App.css';
import Myform from './comp';
function App() {
  
  // var name,age;
  const [x, SetX]=useState({})
  const [val, setVal]=useState('')
  const formValues=(data)=>{
    
   SetX(data)
    setVal('')
    
  }
  return (
    <div>
      <div className="App">
       <div>Form</div> 
        <Myform fun={formValues} val={val}/>
      </div>
      <div>Name:{x.name}</div>
      <div>Age:{x.Age}</div>
    </div>
  );
}

export default App;
