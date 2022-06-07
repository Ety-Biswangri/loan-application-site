import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

    const headersItem = <>
        {
            user && <>
                <li className='lg:mr-4'><Link to="/myProfile">My Profile</Link></li>
                <li className='lg:mr-4'><Link to="/businessDetails">Business Details</Link></li>
                <li className='lg:mr-4'><Link to="/loanApplication">Loan Application</Link></li>
            </>
        }

        <li className='lg:mr-4'>
            {
                user ?
                    <button class="btn" style={{ backgroundColor: "lightblue", color: 'black' }} onClick={logOut}>Log Out</button>
                    : <Link to="/login">Login</Link>
            }
        </li>
    </>

    return (
        <div>
            <div class="navbar bg-violet-800 2xl:max-w-full mx-auto sticky top-0 z-50 mg:mb-10">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headersItem}
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl lg:ml-16 text-white">QUICK LOAN</Link>
                </div>
                <div class="navbar-center 2xl:navbar-end hidden lg:flex text-white">
                    <ul class="menu menu-horizontal p-0">
                        {headersItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;