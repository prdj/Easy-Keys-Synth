import React from 'react';


const Nav = () => {

    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item logo'>
                    <h1>EasyKeys</h1>
                    <h2>polysynth</h2>
                </li>
                <li className='nav-item'>
                    <a href='#'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>Contact</a>
                </li>
                <li className='nav-item'>
                    <button>Donate</button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;