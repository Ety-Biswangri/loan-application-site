import React from 'react';

const BusinessDetails = () => {
    return (
        <div>
            <h2 className='text-black text-xl text-center mb-6 mt-6 underline font-semibold'>Business Details</h2>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100">
                <div class="card-body w-full">
                    <div className='lg:grid grid-cols-2'>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Business Name</span>
                            </label>
                            <input type="text" placeholder="Business Name" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* age */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">GST No</span>
                            </label>
                            <input type="number" placeholder="GST No" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* address */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Address" class="input input-bordered h-8 w-64" />
                        </div>

                        {/* email */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Business Email</span>
                            </label>
                            <input type="email" placeholder="Business Email" class="input input-bordered h-8 w-64" />
                        </div>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary btn-sm w-64">Update</button>
                    </div>
                </div>
            </div>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100 mt-20 mb-12">
                <h2 className='text-black text-xl text-center mb-0 mt-6 underline font-semibold'>My Business Info</h2>
                <div class="card-body w-full">
                    <div className='flex flex-col gap-4'>
                        <p>Business Name: </p>
                        <p>GST No:</p>
                        <p>Address: </p>
                        <p>Business Email:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;