import React, { useState, useEffect } from 'react';
import './App.css';
import {Chart} from './Chart'


const chartData = {
  labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
          label:'Views',
          data:[
              245,
              345,
              454,
              231,
              345,
              223,
              454
          ],
          
          backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)'
          ]
  }]
}

export interface chartData {
  labels: Array<String>
  datasets: Array<any>
}

const App = () => {

  const [data, setData] = useState( {} as chartData)
 
  console.log(data)
  return (
    <div className='App'>
      <h1>Chart</h1>
      <Chart data = {chartData} />
    </div>
  )
}

export default App;
