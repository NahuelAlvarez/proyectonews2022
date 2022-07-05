
import React from 'react';


const Navbar = ({ brand }) =>{
    return(
        <>
         <nav className="navbar  bg-light ">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">{brand} </a>
            </div>
         </nav>
            <hr/>
          
        </>       
    )
} 

export default Navbar;
