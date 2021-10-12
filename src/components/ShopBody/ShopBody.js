import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakedb';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const ShopBody = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
        
    }, [])

    useEffect(() => {
        if (products.length) {
            const stored_cart = [];
            const saved_cart = getStoredCart();
            for (const key in saved_cart) {
                const added_product = products.find(product => product.key === key);
                if (added_product) {
                    const quantty = saved_cart[key]
                    added_product.quantty = quantty;
                    stored_cart.push(added_product);
                }
            }
            setCart(stored_cart);
        }
    }, [products])

    const addToCartButon = product => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key)
    }

    return (
        <div className="container d-flex">
            <div className="container d-flex flex-wrap gap-3 col-lg-10 border-end border-2 border-primary">
                {             
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        addToCartButon={addToCartButon}
                    ></Product>)
                }
            </div>

            <div className="container">
                <Cart cart ={cart}></Cart>
            </div>

        </div>);
};

export default ShopBody;