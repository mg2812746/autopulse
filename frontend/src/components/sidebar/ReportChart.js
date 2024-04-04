// ReportChart.js
// Task: Connect to backend
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
        <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
        <Bar dataKey="profits" fill="#ffc658" name="Profits" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReportChart;
