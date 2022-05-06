import React from 'react';
import useItem from '../Hooks/useItem';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid,BarChart,Bar, Tooltip,Legend, ResponsiveContainer } from 'recharts';

const SupplierChart = () => {
    const [item,setItem]=useItem();

    return (
        <div className='bg-category mt-5'>
           
      <h4 className='text-center'>Per Supplier Quantity VS Sold</h4>
    
        <BarChart width={window.screen.width} height={window.screen.height}    margin={{
            top: 0,
            right: 0,
            left:10,
            bottom: 50,
          }} data={item}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="supplier"  />
  <YAxis />
  <Legend margin={{top:100}}></Legend>
  <Tooltip />
 
  <Bar dataKey="quantity" fill="#8884d8" />
  <Bar dataKey="sold" fill="#82ca9d" />
</BarChart>

<h4 className='text-center'>Per product Quantity VS Sold</h4>

        <BarChart width={window.screen.width} height={550}    margin={{
            top: 0,
            right: 30,
            left: 180,
            bottom: 350,
          }} data={item}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name"   angle={-45} textAnchor="end" interval={0}/>
  <YAxis />
  <Tooltip />
 
  <Bar dataKey="quantity" fill="#8884d8" />
  <Bar dataKey="sold" fill="#82ca9d" />
</BarChart>

        </div>
    );
};

export default SupplierChart;