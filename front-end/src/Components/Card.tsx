import React from 'react'

function Card({children}:any) {
    return (
        <div className='w-full flex justify-center py-10  text-white '>
            <div className="w-full max-w-sm p-4  bg-blur-dark border border-gray-200 rounded-lg shadow sm:p-6 md:p-8   dark:border-gray-700">
                {children}
            </div>
        </div>
    )
}
export function PlainCard({children}:any) {
    return (
        <div className='w-screen flex justify-center py-10 bg-red   border-4 text-white '>
            <div className="w-screen p-4  bg-blur-dark border border-gray-200 rounded-lg shadow sm:p-6 md:p-8   dark:border-gray-700">
                {children}
            </div>
        </div>
    )
}

export default Card