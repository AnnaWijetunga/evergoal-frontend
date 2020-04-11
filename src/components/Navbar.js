import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>

            <NavLink to ="/"
                exact 
                activeStyle={{
                    color: 'black'
                }}>Home
            </NavLink>

                <span> | </span>
            
            <NavLink to ="/goals"
                exact 
                activeStyle={{
                    color: 'black'
                }}>My Goals 
            </NavLink>

        </div>
    )
}

export default NavBar;