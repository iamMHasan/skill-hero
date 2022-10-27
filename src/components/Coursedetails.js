import React from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import { jsPDF } from 'jspdf'

const Coursedetails = () => {
    // pdf
    const pdfGenerator = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.text(60, 60 ,`${more_details_heading}` );
        doc.save("details.pdf");
    }
    const courseDetails = useLoaderData()
    console.log(courseDetails);
    const { image, name, details, id,more_details_heading,more_details_body
    } = courseDetails
    return (
        <div className='mb-3'>
            <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={image} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-12 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-yellow-500">
                        <div className="space-y-2 h-24 flex flex-col items-center justify-center">
                            <div>
                                <h3 className='text-center'>{name}</h3>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-3'>Get more information about this course</p>
                                <button onClick={pdfGenerator} className='p-2 rounded bg-white text-red-500'>Download Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white hover:bg-slate-50 p-7 my-3 w-[350px]  md:w-[1240px] mx-auto rounded'>
                <p className='text-center font-semibold'>{details}</p>
            </div>
            {/* ------------- */}
            <div className="p-6 py-12 bg-violet-400 text-gray-900 w-[350px] md:w-[1240px] mx-auto">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-2xl md:text-4xl tracking-tighter font-bold">Interested? Unlock the premium access now!
                        </h2>
                        <Link to={`/checkout/${id}`} rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Get Premium</Link>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Coursedetails;