import React from 'react';
import { Link } from 'react-router-dom';
import OtherButtons from '../OtherButtons/OtherButtons';

const LogIn = () => {
    return (
        <div className="col-lg-3 mx-auto myform">
            <h3 className="text-center">Log In</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
            <br /><br />
            <h5>Not a User? <Link to='/signup'>Register here</Link></h5>

            <OtherButtons method="Log In"></OtherButtons>
        </div>    );
};

export default LogIn;