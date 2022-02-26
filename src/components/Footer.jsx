import React from 'react'
import {BsFacebook,BsInstagram, BsPhone, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-blue-700 px-2'> 
         <div class="flex mt-8 p-4 gap-1 items-center  justify-center">

        <div class="basis-1/4 ">
        <p className='text-white text-xl font-bold '>Sastya Seba</p>
        <p className='mr-5 text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at suscipit facilis cupiditate dolor aperiam libero tenetur ab nemo culpa!</p>
        
        <div className='flex text-lg space-x-4 mt-5 text-white'>
        <BsFacebook/>
        <BsInstagram/>
        <BsTwitter/>
        </div>
        <div className='flex mt-5 text-white text-lg'>
            <BsPhone className='mt-1 mr-2'/> 01745663332

        </div>
        </div>
        <div class="basis-1/4">
        <p className='text-white text-xl '>Sastya Seba</p>
            <div className='text-white mt-5'>
                <p className='mt-3'>Contact</p>
                <p className='mt-3'>About</p>
                <p className='mt-3'>FAQ</p>
                <p className='mt-3'>Blog</p>
                <p className='mt-3'>Privacy Poilicies</p>
                <p className='mt-3'>Refund</p>
                <p className='mt-3'>License</p>
            </div>
        </div>

        <div class="basis-1/4">
        <p className='text-white text-xl '>For Patience</p>
            <div className='text-white mt-5'>
                <p className='mt-3'>Search Doctors</p>
                <p className='mt-3'>Search Clinics</p>
                <p className='mt-3'>Search Hospital</p>
                <p className='mt-3'>Search Ambulance</p>
                <p className='mt-3'>Privacy Poilicies</p>
                <p className='mt-3'>Search Blood </p>
                <p className='mt-3'>Health Checkup package</p>
                <p className='mt-3'>Diagonastic Service</p>
                <p className='mt-3'>Insurance</p>
            </div>
        </div>
        <div class="basis-1/4">
        <p className='text-white text-xl '>For Doctor/Organization</p>
            <div className='text-white mt-5'>
                <p className='mt-3'>Work With Us</p>
                <p className='mt-3'>Plan And Benifites</p>
                <p className='mt-3'>Petnarship</p>
                <p className='mt-3'>politics</p>
                <p className='mt-3'>Review</p>
            </div>
        </div>
        </div> 
        </div>
  )
}

export default Footer