import React from 'react'
import ReactEcharts from "echarts-for-react"; 
import PlainCard from './Card';

function Charts({data}:any) {

  let price_arr: number[]  = []
  data.map((val:any)=>{
      price_arr.push(Math.floor(val.price))
    })
    console.log(price_arr);
  
    const option = {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
          data: ['30', '35', '40'],
          
        },
        series: [
          {
            data: price_arr,
            type: 'line',

          }
        ]
      }; 
      
  return (
    <PlainCard>

    <div className=' text-gray-300    '>
      <div>Price</div> 
       <ReactEcharts option={option} />
    </div>
    <div className='text-center pt-0'>days</div>
    </PlainCard>


  )
}

export default Charts