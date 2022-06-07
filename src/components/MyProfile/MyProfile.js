import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [isReload, setIsReload] = useState(false);
    const [myProfile, setMyProfile] = useState({});
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // console.log(user?.email);

    const onSubmit = data => {
        // console.log(data);

        const profile = {
            name: data.firstName + ' ' + data.lastName,
            age: data.age,
            mobile: data.mobile,
            email: user?.email,
            location: data.location
        }

        const url = `http://localhost:5000/profile/${user?.email}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                // toast('Profile Updated');
                setIsReload(!isReload);
            })

    }

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => setMyProfile(result));
    }, [user?.email, isReload]);

    return (
        <div>
            <h2 className='text-black text-xl text-center mb-6 mt-6 underline font-semibold'>My Profile</h2>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100">
                <div class="card-body w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:grid grid-cols-2'>
                        {/* first name */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" class="input input-bordered h-8 w-64"  {...register("firstName", {
                                required: {
                                    value: true,
                                    message: 'First Name is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName?.message}</span>}
                            </label>
                        </div>

                        {/* last name */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" class="input input-bordered h-8 w-64" {...register("lastName", {
                                required: {
                                    value: true,
                                    message: 'Last Name is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName?.message}</span>}
                            </label>
                        </div>

                        {/* age */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Age</span>
                            </label>
                            <input type="number" placeholder="Age" class="input input-bordered h-8 w-64" defaultValue="18"  {...register("age", {
                                required: {
                                    value: true,
                                    message: 'Age is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age?.message}</span>}
                            </label>
                        </div>

                        {/* mobile */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Mobile No</span>
                            </label>
                            <input type="tel" placeholder="Mobile No" class="input input-bordered h-8 w-64"  {...register("mobile", {
                                required: {
                                    value: true,
                                    message: 'Mobile is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile?.message}</span>}
                            </label>
                        </div>

                        {/* email */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" value={user?.email} class="input input-bordered h-8 w-64"  {...register("email")} />
                        </div>

                        {/* address */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Location" class="input input-bordered h-8 w-64"  {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary btn-sm w-64 text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100 mt-20 mb-12">
                <h2 className='text-black text-xl text-center mb-0 mt-6 underline font-semibold'>My Profile Info</h2>
                <div class="card-body w-full">
                    <div className='flex flex-col gap-4'>
                        <p> <span className='font-bold'>Name:</span> {myProfile.name}</p>
                        <p> <span className='font-bold'>Age:</span> {myProfile.age}</p>
                        <p> <span className='font-bold'>Mobile No:</span> {myProfile.mobile}</p>
                        <p> <span className='font-bold'>Email Address:</span> {myProfile.email}</p>
                        <p> <span className='font-bold'>Location:</span> {myProfile.location}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyProfile;