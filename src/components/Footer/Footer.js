import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-violet-900 text-neutral-content text-white">
            <div className='footer flex flex-col md:flex-row md:justify-around md:items-center'>
                <div className='mb-5 lg:mb-0'>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Business Loan</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Consultancy</a>
                </div>
                <div className='mb-5 lg:mb-0'>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                </div>
                <div className='mb-5 lg:mb-0'>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>

                <div>
                    <div>
                        <p>All rights reserved by <span className='font-bold'>Quick Loan</span></p>
                        <div className='flex items-center justify-around mt-2'>
                            <p>&copy; {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;