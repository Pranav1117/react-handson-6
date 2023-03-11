import React from 'react';
import Nav from './Nav';
import "./style.css";

function Home(){
    return(
        <>
        <Nav className='navbar'/>
        <div className='homepage'>This is Home Page</div>
        </>
    )
}
export default Home;
