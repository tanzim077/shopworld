import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <p>{products.length}</p>
            <p>{cart.length}</p>
        </div>
    );
};

export default OrderReview;