import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <>
        <div className='navcompo'>
        <Link to='/' className='navcontent'>Home</Link>
        <Link to='/Student' className='navcontent'>Student</Link>
        <Link to='/Contactus' className='navcontent'>Contact Us</Link>
        </div>
        </>
    )
}

export default Nav;