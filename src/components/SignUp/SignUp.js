import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OtherButtons from '../OtherButtons/OtherButtons';

const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandle = e => {
        setEmail(e.target.value);
    }
    const passwordHandle = p => {
        setPassword(p.target.value);
    }

    // const submitbutton = e => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((users) => {
    //             const user = users.user;
    //         });
    //     e.preventDefault();
    // }

    const nameHandle = () => {
    }
    return (
        <div className="mx-3">
            <form>
                <div className="col-lg-3 mx-auto myform">
                    <h3 className="text-center">Register</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" onBlur={nameHandle} className="form-control" id="exampleInputName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onBlur={emailHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onBlur={passwordHandle} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <br /><br />
                    <h5>ALready a User? <Link to='/login'>Log In here</Link></h5>
                    <OtherButtons method="Register"></OtherButtons>
                </div>
            </form>
        </div>    );
};

export default SignUp;