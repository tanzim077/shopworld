import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);

        axios.post('https://ancient-reef-31151.herokuapp.com/products/usekeys', keys)
            .then(function (productsCollection) {
                const products = productsCollection.data;
                if (products.length) {
                    const storedCart = []
                    for (const key in savedCart) {
                        const addedProducts = products.find(product => product.key === key)
                        if (addedProducts) {
                            const quantity = savedCart[key]
                            addedProducts.quantity = quantity
                            storedCart.push(addedProducts)
                        }
                    }
                    setCart(storedCart)
                }
            })


    }, [])

    return [cart, setCart];
};

export default useCart;