import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center  items-center dark:bg-gray-500">
            <div className="container flex flex-col flex-wrap content-center justify-center p-8 py-20 mx-auto md:p-16">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Do the BEST programming course with US!</h1>
                <div className='text-center'>
                    <Link to='/courses'>
                        <button className="px-8 py-3 m-4 text-lg font-semibold rounded bg-violet-400 text-gray-900">Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;