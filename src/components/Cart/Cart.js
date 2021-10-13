import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  let totalRaw = 0;
  let shippingCost = 0;
  let total = 0;
  let tax = 0;
  let totalQuantity = 0;

  for (const product of cart) {
    product.quantity = !product.quantity ? 1 : product.quantity;
    shippingCost = shippingCost + product.shipping;
    totalRaw = total + product.price * product.quantity;
    totalRaw > 100 ? (tax = (totalRaw * .15)) : (tax = (totalRaw * .10));
    total = totalRaw + shippingCost + tax;
    totalQuantity = totalQuantity + product.quantity;
  }

    return (
      <div className='cart d-flex flex-column '>
        <h5>Shopping Summery</h5>
        <hr />
        <p>items Selected: {totalQuantity}</p>
        <p>Item Raw Price: {totalRaw.toFixed(2)}</p>
        <p>Shipping Cost: {shippingCost.toFixed(2)}</p>
        <p>Tax: {tax.toFixed(2)}</p>
        <hr />
        <p>Total Price: {total.toFixed(2)}</p>
        {props.children}
        </div>
    );
};

export default Cart;