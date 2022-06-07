import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const LoanApplication = () => {
    const [isReload, setIsReload] = useState(false);
    const [myApplication, setMyApplication] = useState({});
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);

        const applications = {
            email: user?.email,
            amount: data.amount,
            interest: data.interest,
            tenure: data.tenure,
            monthlyPayment: data.monthlyPayment
        }

        const url = `https://mysterious-retreat-16671.herokuapp.com/applications/${user?.email}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(applications)
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
        fetch(`https://mysterious-retreat-16671.herokuapp.com/applications/${user?.email}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => setMyApplication(result));
    }, [user?.email, isReload]);

    return (
        <div>
            <h2 className='text-black text-xl text-center mb-6 mt-6 underline font-semibold'>Loan Application</h2>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100">
                <div class="card-body w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:grid grid-cols-2'>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" value={user?.email} class="input input-bordered h-8 w-64"  {...register("email")} />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Loan Amount</span>
                            </label>
                            <input type="number" placeholder="Loan Amount" class="input input-bordered h-8 w-64" defaultValue="10000" {...register("amount", {
                                required: {
                                    value: true,
                                    message: 'Loan Amount is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.amount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.amount?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Interest Rate (%)</span>
                            </label>
                            <input type="number" placeholder="Interest Rate" class="input input-bordered h-8 w-64" defaultValue="5" {...register("interest", {
                                required: {
                                    value: true,
                                    message: 'Interest Rate is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.interest?.type === 'required' && <span className="label-text-alt text-red-500">{errors.interest?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Loan Tenure (in years)</span>
                            </label>
                            <input type="number" placeholder="Loan Tenure (in years)" class="input input-bordered h-8 w-64" defaultValue="10" {...register("tenure", {
                                required: {
                                    value: true,
                                    message: 'Loan Tenure is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.tenure?.type === 'required' && <span className="label-text-alt text-red-500">{errors.tenure?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Monthly Payment</span>
                            </label>
                            <input type="number" placeholder="Minimum Monthly Payment" class="input input-bordered h-8 w-64" defaultValue="2000" {...register("monthlyPayment", {
                                required: {
                                    value: true,
                                    message: 'Minimum Monthly Payment is required'
                                },
                            })} />
                            <label className="label">
                                {errors?.monthlyPayment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.monthlyPayment?.message}</span>}
                            </label>
                        </div>

                        <div class="form-control md:mt-8">
                            <button class="btn btn-primary btn-sm w-64 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="card flex-shrink-0 max-w-xs lg:w-full lg:max-w-2xl mx-auto shadow-md bg-base-100 mt-20 mb-12">
                <h2 className='text-black text-xl text-center mb-0 mt-6 underline font-semibold'>Application Details</h2>
                <div class="card-body w-full">
                    <div className='flex flex-col gap-4'>
                        <p> <span className='font-bold'>Loan Amount:</span> {myApplication.amount}</p>
                        <p> <span className='font-bold'>Interest Rate:</span> {myApplication.interest}</p>
                        <p> <span className='font-bold'>Loan Tenure (in years):</span> {myApplication.tenure}</p>
                        <p> <span className='font-bold'>Minimum Monthly Payment:</span> {myApplication.monthlyPayment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanApplication;