import React from 'react'
import {chartData} from './App'
import {Bar, Line} from 'react-chartjs-2'
import './App.css';

interface Chart {
    data: chartData
}

  
export function Chart({data} : Chart) {
    console.log(data)
    return(
        <div className="chart">
            <Bar 
                data= {data}
                options={{
                    maitainAspectRatio: false
                }}
            />
            <br />
            <Line data= {data}/>
        </div>
    );
}