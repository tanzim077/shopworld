import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../fakedb';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './ShopBody.css';

const ShopBody = () => {
    const [displayProducts, setDisplayProducts] = useState([])
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart([]);
    const [searchLength, setSearchLength] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 12;

    // This is for pagination whenever the page number change it render
    useEffect(() => {
        // fetch(`https://ancient-reef-31151.herokuapp.com/products?currentpage=${currentPage}&&size=${size}`)
        fetch(`http://localhost:3100/products?currentpage=${currentPage}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [currentPage])

    // This is for search a product
    const searchOption = (e) => {
        const searchText = e.target.value.toLowerCase();
        const matchedProducts = products.filter(product => (product.category.toLowerCase().includes(searchText) || product.name.toLowerCase().includes(searchText)))
        setDisplayProducts(matchedProducts);
        const matchedProductsLength = matchedProducts.length;
        setSearchLength(matchedProductsLength);
        if (searchText.length !== 0) {
            setDisplayProducts(matchedProducts);
        }
        else {
            setDisplayProducts([])
        }
    }

    const addToCartButon = product => {
        const exists = cart.find(cartProduct => cartProduct.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(cartProduct => cartProduct.key !== product.key)
            exists.quantity += 1;
            newCart = [...rest, exists]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key)
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
                        <div className=" col-lg-4">
                            {
                                (displayProducts.length > 0) &&
                                <p>{searchLength} results found</p>
                            }
                        </div>

                    </div>
                </Form>
            </div>


            <div className="container d-lg-flex">
                <div className="container d-flex flex-wrap gap-3 col-lg-10 border-end border-2 border-primary">
                    {
                        (displayProducts.length === 0) ?
                            displayProducts.map(product => <Product
                                key={product.key}
                                product={product}
                                addToCartButon={addToCartButon}
                            ></Product>) :
                            displayProducts.map(product => <Product
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

            <div className="mx-5 py-3 d-flex  justify-content-center">
                {
                    [...Array(pageCount).keys()].map(page =>
                        <button className={page === currentPage ? "m-1 selected pagination" : "m-1 pagination"} key={page} onClick={() => setCurrentPage(page)}>{page + 1}</button>)
                }
            </div>
        </div>
    );
};

export default ShopBody;