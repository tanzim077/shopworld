import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Confirmation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
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