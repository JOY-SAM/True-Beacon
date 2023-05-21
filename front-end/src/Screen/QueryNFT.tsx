import React, { useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import Charts from '../Components/Charts';
import { useQuery } from 'react-query';

function QueryNFT() {
    const [inputs, setInputs] = useState({from_date:"",to_date:"",symbol:""})
    const [sortBy, setSortBy] = useState('')
    const { isLoading, isError, isSuccess, data, error, refetch } = useQuery( ['fetch-historical-data', sortBy], () => {
      return ( axios.get( `/historical-data/`, {
          params: {
            ... inputs,
            'sortBy' : sortBy
          }
        }  ) )
    }, {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 30000000,//500min
      cacheTime: 30000000,
      refetchInterval: 30000000,
      retry:2
    } )
    const handleSubmit = ( event: { preventDefault: () => void } ) => {
        event.preventDefault();
        refetch()
      }
    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        let name: any, value: any;
    
        name = event.target.name;
        value = event.target.value;
        if(event.target.type=='date')
        {
            value = event.target.value.toString()
        }
        setInputs( values => ( { ...values, [name]: value } ) )
      }
      console.log(inputs);
      
  return (
    <>
    <Card>

    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
    <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Symbol</label>
        <input type="text" name='symbol' value={inputs.symbol} onChange={( e ) => handleChange( e )} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        
        <div className='grid grid-cols-2  gap-4  pt-6 pb-4'>
        <label className='text-white'>From</label>
        <label className='text-white'>To</label>
        <input className='bg-gray-700 p-2 rounded-md' name='from_date' onChange={( e ) => handleChange( e )} type="date" required />
        <input className='bg-gray-700 p-2 rounded-md' name='to_date' onChange={( e ) => handleChange( e )} type="date"  required/>
        </div>
    </div>
    <button type="submit" className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>

    </form>
    </Card>
    {isSuccess && 
    <Charts data={data.data}/>
    }

    </>
      )
}

export default QueryNFT