import React from 'react';
import './PopularProducts.css'
import { product, product1, product2, product3 } from "../../images/indexImg";
import { StarIcon } from '@heroicons/react/solid'
const PopularProducts = () => {
    return (
        <div className='m-auto max-w-screen-2xl'>
            <p className='text-center text-gray-700 font-bold'>Online Store</p>
            <h2 className='text-center section-heading font-extrabold text-7xl'>Popular Products</h2>
            <div className="product-container flex md:justify-around w-full flex-col md:flex-row justify-center mt-16">
                <div className='product text-center my-16 md:my-0'>
                    <div className='flex justify-center'>
                        <img src={product} alt="" />
                    </div>
                    <div className='flex rating justify-center my-5'>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                    </div>
                    <p>Chinese</p>
                    <h3 className='font-bold my-5'>Hot Wings</h3>
                    <button className='add-cart-btn'>Add to cart</button>
                </div>
                <div className='product text-center my-16 md:my-0'>
                    <div className='flex justify-center'>
                        <img src={product2} alt="" />
                    </div>
                    <div className='flex rating justify-center my-5'>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                    </div>
                    <p>Chinese</p>
                    <h3 className='font-bold my-5'>Hot Wings</h3>
                    <button className='add-cart-btn'>Add to cart</button>
                </div>
                <div className='product text-center my-16 md:my-0'>
                    <div className='flex justify-center'>
                        <img src={product3} alt="" />
                    </div>
                    <div className='flex rating justify-center my-5'>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                    </div>
                    <p>Chinese</p>
                    <h3 className='font-bold my-5'>Hot Wings</h3>
                    <button className='add-cart-btn'>Add to cart</button>
                </div>
                <div className='product text-center my-16 md:my-0'>
                    <div className='flex justify-center'>
                        <img src={product1} alt="" />
                    </div>
                    <div className='flex rating justify-center my-5'>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                        <StarIcon className='icon'></StarIcon>
                    </div>
                    <p>Chinese</p>
                    <h3 className='font-bold my-5'>Hot Wings</h3>
                    <button className='add-cart-btn'>Add to cart</button>
                </div>
            </div>
        </div >
    );
};

export default PopularProducts;