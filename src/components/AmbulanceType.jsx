import React from 'react'
import { BsCheck2All } from 'react-icons/bs'

function AmbulanceType() {
  return (
    <div className='mt-1'>
        <p className='bg-cyan-100 text-bold py-3 pl-2 mb-1 text-blue'>AC Ambulance</p>
        <div class="flex flex-row mt-8 p-4 ">
        <div class="basis-2/4 bg-center flex items-center  justify-center">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR65o7mwGELgs-bjTLmaqeYcWGeJbvlfT5WA&usqp=CAU" alt="" />  
        </div>
        <div class="basis-2/4 bg-center flex items-center  justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR65o7mwGELgs-bjTLmaqeYcWGeJbvlfT5WA&usqp=CAU" alt="" />
        </div>
        </div>
        <p className='mt-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing eliuada auctor bibendum arcu, commodo at amet, mi hendrerit. Sed congue sit lacus lorem aenean nunc donec scelerisque. Vitae, neque eu adipiscing nisi tempor mauris. Lectus ac quis odio ultricies sed pulvinar donec. In arcu enim tellus non amet, ultrices. Aelerisque odio nibh eget orci porta. Mattis at sed et eu. Proin fringilla cras mattis vel interdum diam quis sed. Tincidunt vel eu eu urna. Enim dictumst.</p>

        <div className='mt-8'>
    <div className='flex mx-2 mt-2 space-x-4'>
        <BsCheck2All className='my-1 text-cyan-400'/> <p className='text-center'>Key benefit line goes here</p>
    </div>
    <div className='flex mx-2 mt-2 space-x-4 '>
        <BsCheck2All className='my-1 text-cyan-400'/> <p className='text-center'>Key benefit line goes here</p>
    </div>
    <div className='flex mx-2 mt-2 space-x-4'>
        <BsCheck2All className='my-1 text-cyan-400'/> <p className='text-center'>Key benefit line goes here</p>
    </div>
    </div>
    </div>
  )
}

export default AmbulanceType