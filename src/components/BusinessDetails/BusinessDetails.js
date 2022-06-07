import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const BusinessDetails = () => {
    const [isReload, setIsReload] = useState(false);
    const [myBusiness, setMyBusiness] = useState({});
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);

        const business = {
            email: user?.email,
            businessName: data.businessName,
            gst: data.gst,
            address: data.address,
            businessEmail: data.businessEmail
        }

        const url = `http://localhost:5000/business/${user?.email}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(business)
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
        fetch(`http://localhost:5000/business/${user?.email}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => setMyBusiness(result));
    }, [user?.email, isReload]);

    return (
        <div>
            <h2 className='text-black text-xl text-center mb-6 mt-6 underline font-semibold'>Business Details</h2>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100">
                <div class="card-body w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:grid grid-cols-2'>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">My Email</span>
                            </label>
                            <input type="email" value={user?.email} class="input input-bordered h-8 w-64"  {...register("email")} />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Business Name</span>
                            </label>
                            <input type="text" placeholder="Business Name" class="input input-bordered h-8 w-64" {...register("businessName", {
                                required: {
                                    value: true,
                                    message: 'Business Name is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.businessName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.businessName?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">GST No</span>
                            </label>
                            <input type="text" placeholder="GST No" class="input input-bordered h-8 w-64" {...register("gst", {
                                required: {
                                    value: true,
                                    message: 'GST No is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.gst?.type === 'required' && <span className="label-text-alt text-red-500">{errors.gst?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Address" class="input input-bordered h-8 w-64" {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Business Email</span>
                            </label>
                            <input type="email" placeholder="Business Email" class="input input-bordered h-8 w-64" {...register("businessEmail", {
                                required: {
                                    value: true,
                                    message: 'Business Email is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.businessEmail?.type === 'required' && <span className="label-text-alt text-red-500">{errors.businessEmail?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control md:mt-8">
                            <button class="btn btn-primary btn-sm w-64 text-white ">Update</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100 mt-20 mb-12">
                <h2 className='text-black text-xl text-center mb-0 mt-6 underline font-semibold'>My Business Info</h2>
                <div class="card-body w-full">
                    <div className='flex flex-col gap-4'>
                        <p> <span className='font-bold'>Business Name:</span> {myBusiness.businessName}</p>
                        <p> <span className='font-bold'>GST No:</span> {myBusiness.gst}</p>
                        <p><span className='font-bold'>Address: </span> {myBusiness.address}</p>
                        <p> <span className='font-bold'>Business Email:</span> {myBusiness.businessEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;