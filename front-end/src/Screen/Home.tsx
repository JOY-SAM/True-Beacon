import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function Home() {
    const { isLoading, isError, isSuccess, data, error } = useQuery( ["Fetch-data"], () => {
        return ( axios.get( "api/" ) )
    },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            staleTime: 30000000,//500min
            cacheTime: 30000000,
            refetchInterval: 30000000,

        } )
    return (
        
        <></>)
}

export default Home