import React, { createContext, useState, useEffect } from 'react';
import data from '../data';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [ products, setProducts ] = useState(data);
    const [active, setActive ] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [ select, setSelect ] = useState({
        shoes: [],
        option: ""
    })


    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleCategories = (category) => {
       setActive("");
        if ( category === "categories") {
            setProducts(data);
            return;
        }
         const newProducts = data.filter((product) => 
         product.category === category );
         setProducts(newProducts);
         setSelect({
             shoes: newProducts,
             option: category
         })
    }

    

    const handleActive = (brand, index) => {
        setActive(index);
        if ( brand === "All" && (select.option === "" || select.option === "categories")) {
            setProducts(data);
            return;
        } else if ( select.option === "" || select.option === "categories") {
            const newProducts = data.filter((product) => 
            product.name === brand );
            setProducts(newProducts);
            return;
        } else if ( select.option !== "categories" && brand === "All") {
            setProducts(select.shoes);
            return;
        }  const newProducts = select.shoes.filter((product) => 
        product.name === brand );
        setProducts(newProducts);
        return;
    }

    


    return (
        <ProductContext.Provider value={{ 
            products,
            active,
            handleActive,
            toggle,
            handleToggle,
            handleCategories,
             }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;