import React from 'react';
import { Button } from 'react-bootstrap';

const SingleItem = (props) => {
    const { key, category, img, name, price, seller, shipping, star, starCount, stock } = props.products
    const { removeFromCart} = props
    return (
        <div>
            <div className="card mx-4 mb-3 col-lg-9">
                <div className="row g-2 container">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className="container d-flex justify-content-between">
                                <div>
                                    <p className="card-text">Category:  {category}</p>
                                    <p className="card-text">Price:  {price}</p>
                                    <p className="card-text">Shipping:  {shipping}</p>
                                </div>
                                <div>
                                    <p className="card-text">Rating:  {star}</p>
                                    <p className="card-text">Reviews Given:  {starCount}</p>
                                    <p className="card-text">Sell By:  {seller}</p>
                                </div>
                            </div>
                            <div className="d-flex py-3 justify-content-between">
                                <div>
                                    <Button onClick={() => removeFromCart(key)} variant="danger">Remove from Cart</Button>
                                </div>
                                <div>
                                    <p className="card-text"><small className="text-muted">only {stock} items left.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;