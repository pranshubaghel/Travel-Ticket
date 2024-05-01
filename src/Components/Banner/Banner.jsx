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
    <div className="h-[450px] w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4l1-1D8GqUN_qfCHZFMv4lU-OQJMU_7t1Xw&s')] bg-cover bg-no-repeat">
     <div className=' text-center m-auto  lg:flex justify-center  items-center pt-52'>
      <h1 className= 'text-white  lg: text-4xl   font-extrabold'>Welcome To Travel Gate And Tours Nigerian Ltd!</h1>
     </div>
     <p className='text-white  borde lg:text-lg flex justify-center  items-center pt-3'>pearl islnad hotel & resort</p>
     <div className='h-[80px] w-[80%] ml-24   flex mt-6 rounded  bg-white  '>
      <div className='h-[80px] w-[30%] border border-red-600'>
        <Location/>
      </div>
      <div className='h-[80px] w-[25%] border border-green-500'>
        <Calender/>
      </div>
      <div className='h-[80px] w-[30%] border border-yellow-500'>
        <Geusts/>
      </div>
      <button className='h-[80px] w-[15%] bg-red-600 rounded-sm'>
        <Book/>
      </button>
      
      

     </div>
    </div>
    </>
  )


}

export default Banner