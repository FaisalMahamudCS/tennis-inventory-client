import React from 'react';
import useItem from '../Hooks/useItem';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid,BarChart,Bar, Tooltip,Legend,PieChart,Pie, ResponsiveContainer } from 'recharts';

const SupplierChart = () => {
    const [item,setItem]=useItem();

    return (
        <div className='bg-category  '>
           
      <h4 className='text-center'>Per Supplier Quantity VS Sold</h4>
    <ResponsiveContainer width="95%" height={900}>
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
</ResponsiveContainer>
<ResponsiveContainer width={window.screen.width} height={window.screen.height}>
<PieChart width={730} height={250}>
  <Pie data={item} dataKey="quantity" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={item} dataKey="sold" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
</ResponsiveContainer>
<h4 className='text-center'>Per product Quantity VS Sold</h4>
<ResponsiveContainer width="95%" height={window.screen.height}>
        <BarChart width={window.screen.width} height={window.screen.height}    margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 350,
          }} data={item}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name"   angle={-45} textAnchor="end" interval={0}/>
  <YAxis />
  <Tooltip />
 
  <Bar dataKey="quantity" fill="#8884d8" />
  <Bar dataKey="sold" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>

<ResponsiveContainer width={700} height="80%">
    <AreaChart data={item}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="sold" />
      <YAxis  dataKey="stock"/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
     
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
        </div>
    );
};

export default SupplierChart;