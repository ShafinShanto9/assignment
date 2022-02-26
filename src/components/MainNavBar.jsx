import React from 'react'

const MainNavBar = () => {
  return (
    <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div class="flex-shrink-0 flex items-center">
          <p className='pl-10 text-blue-800 text-xl font-bold mr-5'>Sastya Seba</p>
           
        </div>
        <div class="">
          <div class="flex items-center space-x-4 justify-center items-center">
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Find Doctor</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Find Hospital</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Find Ambulance</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Doorstep Services</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop Now</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="ml-4 relative">
                <div>
                <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Prosun</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default MainNavBar