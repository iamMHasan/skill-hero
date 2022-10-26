import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/Authporvider';
import logo from '../assets/logo.png'

const Navbar = () => {
    const { user, providerLogOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        providerLogOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>

                        </ul>
                    </div>
                    <div className='flex'>
                        <img style={{ height: "50px" }} src={logo} alt="" />
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Skill Hero.</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'>
                        {user?.uid ?
                            <button onClick={handleLogOut} className="btn">Log Out</button>
                            :
                            <button className="btn">Log In</button>}
                    </Link>
                    <img className='rounded-full h-10' title={user?.displayName} src={user?.photoURL} alt="" />
                    <div className='ml-3'>
                        <img className='rounded-full h-14' alt="" />
                    </div>
                </div>
                <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                    <span>dark</span>
                    <span className="relative">
                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                    </span>
                    <span>light</span>
                </label>
            </div>
        </div>
    );
};

export default Navbar;