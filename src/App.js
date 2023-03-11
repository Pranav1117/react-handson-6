import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Student from './Component/Student';
import Home from './Component/Home';
import Contactus from './Component/Contactus';
import Context from './Component/Info';
import Edit from './Component/Edit';

import AddStudent from './Component/AddStudent';




function App() {

  const [data,setData]=useState([{
    name:'harry',
    age:21,
    course:"MERN",
    batch:"November"  
  },
  {
    name:'John',
    age:25,
    course:"MEAN",
    batch:"January"  
  },
  {
    name:'Richard',
    age:26,
    course:"MERN",
    batch:"June"  
  },
  {
    name:'Steward',
    age:23,
    course:"MERN",
    batch:"July"  
  }])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>


        <Route path="/Student" element={
        <Context.Provider value={{entries:data,updateFunction:setData}}>
        <Student/>
        </Context.Provider>}/>
        

        <Route path="/editStudent" element={
      <Context.Provider value={{entries:data , updateFunction : setData}}>
        <Edit/>
      </Context.Provider>
    }/>
        <Route path= "/Contactus" element={<Contactus/>}></Route>

        <Route path="/addNewStudent" element={
      <Context.Provider value={{entries:data , updateFunction : setData}}>
<AddStudent/>
      </Context.Provider>
    }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
