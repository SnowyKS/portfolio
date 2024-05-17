import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'




const Header = () => {
   
    return (
        <>
        <header className='header'>
            <nav className='nav'>
                <ul className='list'>
                    <li className="list_item nav-link px-2 link-secondary" > <Link to= "/">Home</Link> </li>
                    <li className="list_item nav-link px-2 link-secondary "> <Link to= "/about">About</Link> </li>
                    <li className="list_item nav-link px-2 link-secondary"> <Link to= "/contacts">Contacts</Link> </li>
                </ul>
            </nav>

        </header>
        </>
    );
}

export default Header;
