import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

  return (

    <nav className="bg-white border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        <div className="flex items-center md:scale-100  scale-75">
          <Link to="/">
          <span className="self-center text-4xl s whitespace-nowrap dark:text-white">True Beacon</span>
          </Link>


        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  placeholder: dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4   bg-blue-700 rounded md:bg-transparent   md:p-0  text-yellow-500" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="https://www.joysam.me/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="https://old.joysam.me/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">More</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header