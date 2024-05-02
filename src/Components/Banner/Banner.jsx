import React from 'react'
import Nav from '../Nav/Nav';
import Location from '../Location/Location';
import Calender from '../Calender/Calender';
import Geusts from '../Geusts/Geusts';
import Book from '../Book/Book';
function Banner() {
  return (
    <>
      <Nav/>
      <div className="h-screen w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4l1-1D8GqUN_qfCHZFMv4lU-OQJMU_7t1Xw&s')] bg-cover bg-no-repeat">
        <div className='flex justify-center  items-center pt-20 lg:pt-52'>
          <h1 className='text-white text-xl text-center lg:text-4xl font-extrabold'>Welcome To Travel Gate And Tours Nigerian Ltd!</h1>
        </div>
        <p className='text-white text-lg flex justify-center items-center pt-3'>pearl islnad hotel & resort</p>
        <div className='lg:h-[80px] w-11/12 lg:w-[80%] rounded-lg m-auto mt-5 lg:mt-10 lg:flex  bg-white'>
          <div className='h-[80px] w-full text-lg:w-[30%] mt-4'>
            <Location />
          </div>
          <div className='h-[80px] w-full  lg:w-[25%]'>
            <Calender />
          </div>
          <div className='h-[80px] w-full  lg:w-[30%] border-t-gray-900 lg:m-4 '>
            <Geusts />
          </div>
          <button className='h-[80px] w-full lg:w-[15%]  bg-red-600 rounded-sm'>
            <Book />
          </button>



        </div>
      </div>
    </>
  )


}

export default Banner;