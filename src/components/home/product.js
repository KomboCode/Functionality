import React from 'react';

const Product = ({ name, price,image}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <img src={image}/>
            <a href='#'>Buy Now</a>
        </div>
    )
}

export default Product;