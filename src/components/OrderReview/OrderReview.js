import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { clearTheCart, removeFromDb } from '../../fakedb';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart'
import SingleItem from '../SingleItem/SingleItem';

const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const removeFromCart = (key) => {
        const updateCart = cart.filter(product => product.key !== key)
        setCart(updateCart)
        removeFromDb(key)
        console.log(key);
    }

    const confirmation = () => {
        history.push('/confirmation')
        setCart([]) //Remove from UI
        clearTheCart();

    }
        return (
            <div>
                <div>
                    {
                        cart.map(product =>
                            <SingleItem
                                key={product.key}
                                products={product}
                                removeFromCart={removeFromCart}
                            ></SingleItem>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <Button onClick = {confirmation} variant="warning">Confirm Your Order</Button>

                    </Cart>
                </div>
            </div>
        );
    };

    export default OrderReview;