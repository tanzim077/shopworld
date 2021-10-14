import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const ShopBody = () => {

    const [displayProducts, setDisplayProducts] = useState([])
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchLength, setSearchLength] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(10);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const stored_cart = [];
            const saved_cart = getStoredCart();
            for (const key in saved_cart) {
                const added_product = products.find(product => product.key === key);
                if (added_product) {
                    const quantity = saved_cart[key]
                    added_product.quantity = quantity;
                    stored_cart.push(added_product);
                }
            }
            setCart(stored_cart);
        }
    }, [products])


    const pages = []
    for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
        pages.push(i)
    }
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentItems);
    console.log(products.slice(0,10));


    const searchOption = (e) => {
        const searchText = e.target.value.toLowerCase();
        const matchedProducts = products.filter(product => (product.category.toLowerCase().includes(searchText) || product.name.toLowerCase().includes(searchText)))
        setDisplayProducts(matchedProducts);
        const matchedProductsLength = matchedProducts.length;
        setSearchLength(matchedProductsLength);
        console.log(matchedProductsLength);
    }

    const addToCartButon = product => {
        const exists = cart.find(cartProduct => cartProduct.key === product.key)
        let newCart = [];
        if (exists) {
            const rest = cart.filter(cartProduct => cartProduct.key !== product.key)
            exists.quantity += 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key)
    }

    const handleButton = (page) => {
        setCurrentPage(page)
    }

    return (
        <div>
            <div className="container p-2">
                <Form className="d-lg-flex gap-2">
                    <div className="d-flex mx-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            onChange={searchOption}
                            className="me-2 col-lg-6"
                            aria-label="Search"
                        />
                        <div className="me-2 col-lg-6">
                            <p>{searchLength} results found</p>
                        </div>
                    </div>
                </Form>

            </div>
            <div className="container d-flex">
                <div className="container d-flex flex-wrap gap-3 col-lg-10 border-end border-2 border-primary">
                    {
                        currentItems.map(product => <Product
                            key={product.key}
                            product={product}
                            addToCartButon={addToCartButon}
                        ></Product>)
                    }
                </div>
                
                <div className="container">
                    <Cart cart={cart}>
                        <Link to="/order"><Button variant="warning">Proceed To Confirm</Button></Link>
                    </Cart>
                </div>

            </div>
            <div className="mx-5 py-3">
                {
                    pages.map(page =>
                        <Button onClick = {() => handleButton(page) } className="m-1">{page}</Button>
                    )
                }

            </div>
        </div>
    );
};

export default ShopBody;