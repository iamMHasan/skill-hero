import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Authprovider/Authprovider';

const Navbar = () => {
    const {logOutFromAll, user} = useContext(AuthContext)
    console.log(user);
    // log out 
    const handleLogOut = () => {
        logOutFromAll()
        .then(()=>{})
        .catch(e => console.log(e))
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
                    <a className="btn btn-ghost normal-case text-xl">Skill Hero.</a>
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
                       {user?.uid ?  <button onClick={handleLogOut} className="btn">Log Out</button>
                       :  <button className="btn">Log In</button>
                    }
                    </Link>
                    <div className='ml-3'>
                    <img className='rounded-full h-14' src={user?.photoURL} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;