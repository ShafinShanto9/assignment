import React from 'react'
import { BsShieldCheck } from 'react-icons/bs'
const TopHeader = () => {
  return (
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mt-5">
	<img class="object-cover w-full h-full" src="https://www.healthabove60.com/images/service-banner/ambulance.jpg" alt="Flower and sky"/>

	<div class="absolute top-0 left-0 px-6 py-8">
	  <h1 class="leading-normal text-black-700 text-3xl">Rent a Prompt, High quality, <br /> Emergency 
    ambulance at your need</h1>
    <p>*(Customizable Attendant Doctor and Nurse)</p>
    
    <div className='mt-8'>
    <div className='flex mx-2 mt-2 space-x-4'>
        <BsShieldCheck className='my-1'/> <p className='text-center'>Best Price, Quality Service, Satisfaction Guaranteed</p>
    </div>
    <div className='flex mx-2 mt-2 space-x-4'>
        <BsShieldCheck className='my-1'/> <p className='text-center'>Trusted, Certified and Skilled Driver</p>
    </div>
    <div className='flex mx-2 mt-2 space-x-4'>
        <BsShieldCheck className='my-1'/> <p className='text-center'>On-Time Gurantee</p>
    </div>
    </div>
	</div>
  </div>
  )
}

export default TopHeader