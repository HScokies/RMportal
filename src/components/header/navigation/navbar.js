import { Logo, Navl, Header_top, DDmenu } from '../../../rules.js';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from './Menu.svg'
import { useState } from 'react';

function Navbar() {
    const [dropdown, setDD] = useState(false);
    return (
        <Header_top>
        <Logo>
            <Link to="/">Rick and Morty portal</Link>
            <button onClick={() => setDD(!dropdown)}><img id='ddbtn' src={MenuIcon}/></button>
        </Logo>
        <Navl>
            <NavLink to="/" activeStyle={{color: '#1DC985'}}>Characters</NavLink>
            <NavLink to="/">Location</NavLink>
            <NavLink to="/">Episode</NavLink>
        </Navl>
        <DDmenu className={dropdown?'active':'hidden'}>
            <NavLink to="/" activeStyle={{color: '#1DC985'}}>Characters</NavLink>
            <NavLink to="/">Location</NavLink>
            <NavLink to="/">Episode</NavLink>
        </DDmenu>
        </Header_top>
    );
}
export default Navbar;