import React from 'react'
import Card from '../Components/Card'

function QueryNFT() {
  return (
    <Card>

    <form className="space-y-4 md:space-y-6" action="#">
    <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Symbol</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        
        <div className='grid grid-cols-2  gap-4  pt-8 pb-4'>
        <input className='bg-gray-700 p-2 rounded-md' type="date" />
        <input className='bg-gray-700 p-2 rounded-md' type="date" />
        </div>
    </div>
    <button type="submit" className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>

    </form>
    </Card>
      )
}

export default QueryNFT