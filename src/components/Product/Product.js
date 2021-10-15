import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { key, category, img, name, price, seller, shipping, star, starCount, stock } = props.product;
    
    return (
        <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="card-image mx-auto" variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                   {/* {name.slice(0,10)} */}
                    {
                        (name.length > 80) ? name.slice(0, 80) + '...'  :  name
                    }
                </Card.Title>

                <div className="d-flex py-2 justify-content-between">
                    <p>Category: {category}</p>
                    <Rating
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={star}
                        readonly
                    />
                </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between gap-2">
                    <p>Price : $ {price}</p>
                    <p>Seller: {seller}</p>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between gap-2">
                    <p>Shipping Cost : {shipping}</p>
                    <p>Stocks : {stock}</p>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <div>
                    <Button onClick={() => props.addToCartButon(props.product)} variant="primary">Add to Cart</Button>
                </div>
            </Card.Body>
        </Card>
    );
};
// onClick = { addToCartButon }
export default Product;