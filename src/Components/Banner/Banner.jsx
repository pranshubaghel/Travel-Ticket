import React from 'react'
import Nav from '../Nav/Nav';
function Banner() {
  return (
    <>
    <Nav/>
    <div className="h-[500px]  w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4l1-1D8GqUN_qfCHZFMv4lU-OQJMU_7t1Xw&s')] bg-cover bg-no-repeat">
     <div className='flex justify-center  items-center pt-52'>
      <h1 className='text-white text-4xl  font-extrabold'>Welcome To Travel Gate And Tours Nigerian Ltd!</h1>
     </div>
     <p className='text-white text-lg flex justify-center  items-center pt-3'>pearl islnad hotel & resort</p>
     <div className='h-[80px] w-[80%] ml-24   flex mt-6 rounded   bg-white  '>
      <div className='h-[80px] w-[30%] border border-red-600'></div>
      <div className='h-[80px] w-[25%] border border-green-500'></div>
      <div className='h-[80px] w-[30%] border border-yellow-500'></div>
      <div className='h-[80px] w-[15%] border border-blue-600 bg-red-700 '></div>
      
      

     </div>
    </div>
    </>
  )


}

export default Banner