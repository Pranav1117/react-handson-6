import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import Context from "./Info";
import Nav from "./Nav";

function AddStudent() {
const Data = useContext(Context);


const nav = useNavigate()
  const addObj ={
    name:"",
    age:"",
    course:"",
    batch:""
  }

  const handleOnChange =(e) =>{
    addObj[e.target.name] = e.target.value;
    //console.log(addObj)
  }

  const handleSubmit =() =>{
    Data.entries.push(addObj);
    nav('/student')
  }
  return (
    
    <div className="editpart">
    <Nav/>
    <input className="input1" placeholder="Name" name='name' onChange={handleOnChange}></input>
    <input className="input2" placeholder="Age" name='age' onChange={handleOnChange}></input>
    <input className="input3" placeholder="Course" name='course' onChange={handleOnChange}></input>
    <input className="input4" placeholder="Batch" name='batch' onChange={handleOnChange}></input>
      
      <button onClick={handleSubmit} className='updatebtn'>Update</button>
    </div>
  );
}

export default AddStudent