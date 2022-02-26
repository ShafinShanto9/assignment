import React from 'react'

function form() {
  return (
        <form class="bg-white shadow-md rounded mb-4 border-4">
            <p style={{backgroundColor:'#1d4ed8'}} className=' text-center py-4 mb-1 text-white'>Request an ambulance</p>
        <div className='px-3'>
        <div class="mb-4 mt-4 ">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            From
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example-dhaka"/>
        </div>
        <div class="mb-4 mt-4 ">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            DEstination
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example-khulna"/>
        </div>
        <div class="mb-4 mt-4 ">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Ambulance Type
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ac"/>
        </div>
        <div class="mb-4 mt-4 ">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Date
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" placeholder="date"/>
        </div>
        <div>
            <div ></div>
            <label class=" block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox"/>
            <span class="text-sm">
                I need a round trip
            </span>
            </label>
        </div>
        <div class="mb-4 mt-4 ">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name"/>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Phone
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Phone number"/>
        </div>
        <div class="flex items-center justify-center">
          <button class="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send ambulance request
          </button>
        </div>

        </div>
      </form>
  )
}

export default form