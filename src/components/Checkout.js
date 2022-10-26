import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Checkout = () => {
    const checkout = useLoaderData()
   const {details} = checkout
    return (
        <div>
            <div className="w-full h-[100vh] flex items-center dark:bg-gray-500">
                <div className="container flex flex-col flex-wrap content-center justify-center p-8 py-20 mx-auto md:p-16">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">{details}</h1>
                    <h3>You will see the full content after completing the full payment! Thank you for being with us.</h3>
                </div>
            </div>
        </div>
    );
};

export default Checkout;