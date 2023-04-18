
import { useState } from "react";

export default function Myform({fun, val, }){
const [data , setMydata ] = useState({
    name:"",
    Age:''
})
  
    return (
            <>
            Name:      
                <input type="text" onChange={ (e)=>{setMydata({...data ,name:e.target.value}); 
            console.log(data)} }></input>           
            <div></div>
            Age:
                <input type="number" onChange={ (e)=>{setMydata({...data ,Age:e.target.value });
                console.log(data)} }></input>
            <div>
            <button onClick={()=>fun(data)}>Submit</button>
            <input onClick={()=>{}} type="reset"></input>
            </div>
            </>

            
    );
}