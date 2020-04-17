import React from 'react';
import { NavLink } from 'react-router-dom';

// when clicking on a link, link turns yellow to show it's active
const NavBar = () => {
    return (
        <div className='navbar'>

            <NavLink to ="/"
                exact 
                activeStyle={{
                    color: 'yellow'
                }}>Home
            </NavLink>

                <span>  |  </span>
            
            <NavLink to ="/goals"
                exact 
                activeStyle={{
                    color: 'yellow'
                }}>My Goals 
            </NavLink>

        </div>
    )
}

export default NavBar;