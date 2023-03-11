import React, { useContext } from 'react';
import Nav from './Nav';
import './style.css'
import {Link,useNavigate} from 'react-router-dom';
import Context from './Info';

function Student(){

    const Data = useContext(Context)

    const nav=useNavigate()
    return(
<>
<Nav/>
<h1>Student Detail</h1>
<button className='btn' onClick={()=>{nav('/addNewStudent')}}> Add New Student</button>
<div className='data'>
<table className='table'>
    <thead>
    <tr className='tablerows'>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Change</th>
    </tr>

   
    </thead>
    <tbody>
      {Data.entries.map((item,index)=>{
        return(
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.course}</td>
            <td>{item.batch}</td>
            
            <td>
                <Link to="/editStudent" state={{data:index}}>Edit</Link>
            </td>
        </tr>
        )
      })}


    </tbody>
  
</table>
</div>
</>
)

}



export default Student;