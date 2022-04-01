import React, { useContext } from 'react';
import { ProductContext } from '../contexts/productContext';
import { AiOutlineMenu } from 'react-icons/ai';
import Product from './home/product';
import Sidebar from './home/sidebar';
import data from '../data';
import Categories from './home/categories';

const brands = new Set(data.map((product) => product.name));
const allBrands = ["All", ...brands];

const categories = new Set(data.map((product) => product.category ));
const allCategories = ["categories", ...categories];

const Home = () => {

    const { 
        products,
        active,
        handleActive,
        toggle,
        handleToggle, 
        handleCategories,
     } = useContext(ProductContext);

    return (
        <section className='home'>
            <Sidebar 
                allBrands={allBrands}
                active={active}
                handleActive={handleActive}
                toggle={toggle}
                />
            <div className={ toggle ? "toggle-middle" : "middle"}>
                {/* Categories */}
                <Categories
                    toggle={toggle}
                    allCategories={allCategories}
                    handleCategories={handleCategories}
                />
                {/* Mrnubar */}
                <AiOutlineMenu 
                   className='menubar'
                   onClick={handleToggle}
                   style={ toggle ? { transform: "translate(-225px, -143px)"} : null }
                />
                {/* Products */}
                <div className={ toggle ? "toggle-products" : "products"}>
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                {...product}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home;