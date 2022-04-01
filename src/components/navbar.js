import React, { useContext } from 'react';
import { ProductContext } from '../contexts/productContext';

const Navbar = () => {

    const { toggle } = useContext(ProductContext);

    return (
        <section className='navbar'>
            <div>
                <img src='./icons/thelogo.png' width='100px'/>
                <h1 
                  style={ toggle ? { display: "none"}: null }
                >Gorota</h1>
            </div>
        </section>
    )
}

export default Navbar;