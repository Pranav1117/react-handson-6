import React, { useContext } from "react";
import './style.css';
import Nav from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";

import Context from "./Info";

function Edit() 
{
  const Data = useContext(Context);
  const navigate = useNavigate();
  const index = useLocation().state.data;
  

  const updateObj ={
    name:Data.entries[index].name,
    age:Data.entries[index].age,
    batch:Data.entries[index].batch,
    course:Data.entries[index].course,
  }


  const handleOnChange =(e)=>{
    updateObj[e.target.name]=e.target.value
  }

  const handleUpdate = ()=>{
    Data.entries[index]=updateObj
    navigate('/student')
  }


  return (
    <div className="edit">
      <Nav/>
    <input className="input1" placeholder={Data.entries[index].name} name='name' onChange={handleOnChange}></input>
    <input className="input2" placeholder={Data.entries[index].age} name='age' onChange={handleOnChange}></input>
    <input className="input3" placeholder={Data.entries[index].course} name='course' onChange={handleOnChange}></input>
    <input className="input4" placeholder={Data.entries[index].batch} name='batch' onChange={handleOnChange}></input>
    <button className="updatebtn"  onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Edit;