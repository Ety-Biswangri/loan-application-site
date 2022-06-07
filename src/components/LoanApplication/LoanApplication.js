import React from 'react';

const LoanApplication = () => {
    return (
        <div>
            <h2 className='text-black text-xl text-center mb-6 mt-6 underline font-semibold'>Loan Application</h2>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100">
                <div class="card-body w-full">
                    <div className='lg:grid grid-cols-2'>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Loan Amount</span>
                            </label>
                            <input type="number" placeholder="Loan Amount" class="input input-bordered h-8 w-64" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Interest Rate</span>
                            </label>
                            <input type="number" placeholder="GST No" class="input input-bordered h-8 w-64" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Loan Tenure (in years)</span>
                            </label>
                            <input type="number" placeholder="Loan Tenure (in years)" class="input input-bordered h-8 w-64" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Monthly Payment</span>
                            </label>
                            <input type="number" placeholder="Minimum Monthly Payment" class="input input-bordered h-8 w-64" />
                        </div>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary btn-sm w-64">Submit</button>
                    </div>
                </div>
            </div>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100 mt-20 mb-12">
                <h2 className='text-black text-xl text-center mb-0 mt-6 underline font-semibold'>Application Details</h2>
                <div class="card-body w-full">
                    <div className='flex flex-col gap-4'>
                        <p>Loan Amount: </p>
                        <p>Interest Rate:</p>
                        <p>Loan Tenure (in years): </p>
                        <p>Minimum Monthly Payment:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanApplication;