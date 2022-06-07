import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    if (loading || updating) {
        return <Loading></Loading>;
    }

    let errorMessage;

    if (error || updateProfileError) {
        errorMessage = <p className='text-red-500'><small>{error?.message || updateProfileError?.message}</small></p>
    }

    if (user) {
        navigate('/myProfile');
    }

    const onSubmit = async (data) => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };


    return (
        <div>
            <h2 className='text-center my-6 text-2xl font-semibold'>Please Register</h2>

            <div className="flex justify-center w-full my-10 mb-14">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* name input field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            {/* email input field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>

                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* password input field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white btn-primary' type="submit" value="Register" />
                        </form>

                        {errorMessage}

                        <p><small>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></small></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;