import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { clearTheCart, getStoredCart } from '../../fakedb';
import useAuth from '../../hooks/useAuth';

const Confirmation = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const history = useHistory();

    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        axios.post('https://ancient-reef-31151.herokuapp.com/products/orders', data)
            .then(function (result) {
                if (result.data.insertedId) {
                    alert("Data Inserted Successfully");
                    clearTheCart();
                    reset();
                }
            })

        // history.push('/completeshopping');

    };
    return (
        <div className="container p-4 ">
            <h2 className="text-center py-3">Welcome to Shipping</h2>

            <form className="col-lg-5 d-flex mx-auto flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="name" defaultValue={user.displayName} {...register("name")} />

                <input className="form-control" placeholder="email" defaultValue={user.email} {...register("email")} />

                <input className="form-control" placeholder="Enter your phone" {...register("phone", { required: true })} />
                <input className="form-control" placeholder="Enter your address" {...register("address", { required: true })} />
                <input className="form-control" placeholder="Notes / Tags" {...register("extra", { required: false })} />

                {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                <Button variant="primary" type="submit">Submit</Button>

            </form>
        </div>
    );

}
export default Confirmation;