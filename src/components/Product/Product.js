import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Product = (props) => {
    const { key, category, img, name, price, seller, shipping, star, starCount, stock } = props.product;
    
    
    return (
        <Card style={{ width: '18rem' }} className= "col-lg-4">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <br />
                <Card.Subtitle>Category: { category}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Price : $ {price}</ListGroupItem>
                <ListGroupItem>Seller: {seller}</ListGroupItem>
                <ListGroupItem>Shipping Cost : {shipping}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <div className="d-flex gap-2">
                    <p>Rating : {star}</p>
                    <p>Stock Remaining : {stock}</p>
                </div>
                <div>
                    <Button onClick={() => props.addToCartButon(props.product)} variant="primary">Add to Cart</Button>
                </div>
            </Card.Body>
        </Card>
    );
};
// onClick = { addToCartButon }
export default Product;