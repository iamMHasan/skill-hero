import React from 'react';
import { useLoaderData , Link} from 'react-router-dom'
const Courses = () => {

    const courses = useLoaderData()
    console.log(courses);

    return (
        <div className='grid grid-cols-3 gap-3 my-4 p-5 mx-auto w-[1200px] '>
            {
                courses.map(course => (
                    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 p-1">
                        <img src={course.image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{course.name}</h2>
                                <p className="text-gray-100">Enroll to Build your future now!</p>
                            </div>
                            <Link to={`/courses/${course.id}`}>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Enroll Now</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Courses;