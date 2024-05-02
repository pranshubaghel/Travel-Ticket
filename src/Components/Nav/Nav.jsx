import React from 'react'

function Nav() {
    return (
        <>
            <div className="flex justify-between gap-2 bg-gray-800 p-4">
                <img className='h-[70px] w-[100px] lg:w-[120px]  lg:ml-[50px] py-4' src="http://codexeco.com/hms/public/uploads/logo/d76e10d2292d1bfa9f000545009607c6_1640682030.png" />
                <div className=" hidden lg:flex items-center space-x-4 px-10 w-[70%]">
                    <a className="text-red-600 hover:text-gray-300">Home</a>
                    <a className="text-white hover:text-red-600">About</a>
                    <a className="text-white hover:text-red-600">Contact</a>
                </div>

                <div className=" hidden lg:flex items-center gap-4 justify-between">
                    <a className="text-white hover:text-gray-300 px-2  ">Log In</a>
                    <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded p-10">Sign Up</a>
                </div>

                <div className='lg:hidden py-5'>
                    <p className='h-1 w-5 bg-white'></p>
                    <p className='h-1 w-5 bg-white mt-1'></p>
                    <p className='h-1 w-5 bg-white mt-1'></p>
                </div>
            </div>


        </>
    );

}

export default Nav;