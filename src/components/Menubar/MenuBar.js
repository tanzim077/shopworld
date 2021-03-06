import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MenuBar.css';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    
    return (
        <div>
            <div>
                <div className="">
                    <div>
                        <Navbar bg="light" expand="lg" className="navbar-brand">
                            <Container fluid>
                                <div className="col-12 col-md-12 col-lg-5 d-lg-flex custom-link">
                                    <Navbar.Brand href="">ShopWorld</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav
                                            className="me-auto my-2 my-lg-0"
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll
                                        >
                                            <Link to="/home"><Nav.Link href="home">Home</Nav.Link></Link>
                                            <Link to="/user"><Nav.Link href="user">User</Nav.Link></Link>
                                            <Link to="/order"><Nav.Link href="order">Order Review</Nav.Link></Link>
                                            <Link to="/inventory"><Nav.Link href="order">Inventory</Nav.Link></Link>

                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                                <div className=" gap-3 ">
                                    {
                                        (user.email)
                                            ?
                                            <div className="d-flex user-section ">
                                                <p>{user.displayName}</p>
                                                <div>
                                                    <img src={user.photoURL} className="" alt="" />
                                                    <Link to="/signout"><Button onClick={logOut} variant="primary">Sign Out</Button></Link>
                                                </div>
                                            </div>
                                            :
                                            <div className="d-flex gap-3">
                                                <Link to="/login"><Button variant="warning">Login</Button></Link>
                                                <Link to="/signup"><Button variant="info">Register</Button></Link>
                                            </div>
                                    }
                                </div>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MenuBar;
