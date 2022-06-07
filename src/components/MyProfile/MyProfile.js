import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h2 className='text-black text-xl text-center mb-6 mt-6 underline font-semibold'>My Profile</h2>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-2xl bg-base-100">
                <div class="card-body w-full">
                    <div className='lg:grid grid-cols-2'>
                        {/* first name */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* last name */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* age */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Age</span>
                            </label>
                            <input type="number" placeholder="Age" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* mobile */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Mobile No</span>
                            </label>
                            <input type="tel" placeholder="Mobile No" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* email */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* address */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Address" class="input input-bordered h-8 w-64" />
                        </div>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary btn-sm w-64">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;