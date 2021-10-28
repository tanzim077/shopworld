import React from 'react';
import './NotFound.css';
import error1 from '../../images/404.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const NotFound = () => {
    return (
        <div>
            <div className="d-flex pt-5">
                <div className="container text-center col-lg-6 my-auto  d-flex flex-wrap justify-content-center  align-items-center">
                    <div>
                        <h1 >Sorry Page Not found</h1>
                        <p className="text-center">We are extremely sorry to say that those page is you are looking for not found at this moment. You may entered a false link or this page is under construction. Please keep patience. </p>
                        <h3>Thanks for stay with us </h3>

                    </div>
                    <div className="pt-4">
                        <Link to="/"><Button variant="info">Go to Home</Button></Link>
                    </div>
                </div>

                <div className="ps-5 img-fluid col-lg-6  error-img">
                    <img src={error1} alt="" />
                </div>
            </div>

        </div>

    );
};

export default NotFound;