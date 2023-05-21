import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Card from '../Components/Card'

function Login() {
    const [inputs, setInputs] = useState({username:"",password:""})

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
    const handleSubmit = ( event: { preventDefault: () => void } ) => {
        event.preventDefault();
        axios.post('user/login/', inputs)
          .then(function (response) {
            console.log(response);
            alert("We have authenticated. We can use JWT in future for authorization")
            localStorage.setItem("access",response.data.access)
            // We have authenticated. We can use JWT in future for authorization
          })
          .catch(function (error) {
            alert("Something went wrong")
          });
      }
    return (

        <Card>
          <div className="px-6 space-y-4 md:space-y-6 sm:px-4 py-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Login to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="username" name="username" id="username" value={inputs.username} onChange={( e ) => handleChange( e )} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••"value={inputs.password} onChange={( e ) => handleChange( e )} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
              </form>
          </div>
          </Card>

    )
}

export default Login