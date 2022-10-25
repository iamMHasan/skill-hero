import React from 'react';
import { useLoaderData } from 'react-router-dom'

const Coursedetails = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails);
    const {image, name} = courseDetails
    return (
          <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={image} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-12 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-yellow-500">
                        <div className="space-y-2 h-24 flex items-center justify-center">
                            <h1 >{name}</h1> 
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Coursedetails;