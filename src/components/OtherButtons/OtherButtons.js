import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OtherButtons = (props) => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URL = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result =>
                history.push(redirect_URL))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
            });
    }


    return (
        <div className="">
            <div className="text-center pt-4 text-capitalize text-primary">
                <h5>{props.method} using ...</h5>
            </div>
            <div className="mx-auto p-3 d-flex justify-content-center flex-column gap-2 ">
                <Row>
                    <Button onClick={handleGoogleSignIn} variant="secondary">
                        <i style={{
                            backgroundColor: "#dd4b39",
                            padding: "3px 9px",
                            borderRadius: "4px"
                        }}
                            class="fab fa-google"></i>
                        &nbsp;&nbsp;&nbsp;{props.method} with Google
                    </Button>
                </Row>
                <Row>
                    {/* <Button onClick={signinUsingGithub} variant="secondary"> */}
                    <Button variant="secondary">
                        <i style={{
                            backgroundColor: "#333333",
                            padding: "3px 9px"
                        }} class="fab fa-github"></i
                        >&nbsp;&nbsp;&nbsp;{props.method} with Github
                    </Button>
                </Row>
                <Row>
                    {/* <Button onClick={signinUsingFacebook} variant="secondary"> */}
                    <Button variant="secondary">
                        <i style={{
                            backgroundColor: "#3b5998",
                            padding: "3px 9px"
                        }} class="fab fa-facebook-f"></i>
                        &nbsp;&nbsp;{props.method} with Facebook
                    </Button>
                </Row>
            </div>
        </div>
    );
};

export default OtherButtons;