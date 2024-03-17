import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Doughnut } from 'react-chartjs-2';

function Vizualization() {
  // Sample data for demonstration
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        label: 'Contribution',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  const [chartKey, setChartKey] = useState(0);

  const destroyChart = () => {
    setChartKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="h-screen flex">
      <Navbar />
      <div className="ml-20 mt-10">
        <h1 className="text-3xl font-bold mb-5">Receipts Insights</h1>
        <div className="flex mb-5">
          <div className="mr-10">
            <h2 className="text-xl font-semibold">Circular Graph</h2>
            <Doughnut key={chartKey} data={data} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Insights</h2>
            <p>Highest Amount: $500</p>
            <p>Most Expensive Category: Category X</p>
            <p>Most Concurrent Location: Location Y</p>
            <button onClick={destroyChart}>Refresh Chart</button>
          </div>
        </div>
        <h2 className="text-xl font-semibold">Receipts Information</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Number</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Total</th>
              <th>File Name</th>
              <th>Extraction Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Category 1</td>
              <td>$100</td>
              <td>2024-03-18</td>
              <td>$500</td>
              <td>Receipt1.pdf</td>
              <td>2024-03-18</td>
              <td>
                <button className="text-blue-500">View JSON</button>
                <button className="ml-2 text-blue-500">View File</button>
              </td>
            </tr>
            {/* Add more rows for other receipts */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vizualization;
