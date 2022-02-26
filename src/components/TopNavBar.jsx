import React from 'react'

function TopNavBar() {
  return (
    <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Offer and updates</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Find Blood</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Insurances</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Health Checkup</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Diagnostic Services</a>
            <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Medical Equipments</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="ml-4 relative">
                <div>
                <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Get the app</a>
                <a href="#" class="text-black-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm">Support</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default TopNavBar