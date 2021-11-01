import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth'

const User = () => {
    const user = useAuth();
    const [currentUser, setCurrentUser] = useState([]);
    const [order, setOrder] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3100/products/orders?email=${currentUser.email}`,
            {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('idToken')}`
                }
            }
        )
            .then(res => {
                if (res.status === 200) {
                   console.log(res);
                } else if (res.status === 401) {
                    history.push('/login')
                    console.log(res);
                }
                setOrder(res.data);
            })
    }, [currentUser])

    useEffect(() => {
        setCurrentUser(user.user)
    }, [user])

    // console.log(currentUser);
    console.log(order);

    return (
        <div>
            <div className="container justify-content-center py-3 d-flex gap-4">
                <div>
                    <img src={currentUser.photoURL} alt="" />
                </div>
                <div>
                    <h1>{currentUser.displayName}</h1>
                    <h3>{currentUser.email}</h3>
                </div>
            </div>

{/* Make a form to show all the order confiremd by user */}

        </div>
    );
};

export default User;