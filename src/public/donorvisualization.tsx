import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js';
import "../assets/css/donorvisualization.css";

// Register Chart.js modules
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const SoldAndDonatedBooks: React.FC = () => {
  // Data for Pie Chart
  const pieData = {
    labels: ['Donated Books', 'Sold Books'],
    datasets: [
      {
        label: 'Books Distribution',
        data: [20, 80],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#e57373'],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000,
      loop: true,
    },
    rotation: 0,
    circumference: 360,
  };

  // Data for Bar Charts
  const barData1 = {
    labels: ['Fiction', 'Love Story', 'History', 'Information Tech', 'Engineering', 'Loksewa'],
    datasets: [
      {
        label: 'Books Demanded',
        data: [50, 40, 30, 60, 70, 80],
        backgroundColor: ['#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#003c8f'],
        hoverBackgroundColor: '#64b5f6',
      },
    ],
  };

  const barData2 = {
    labels: ['Under 18', '18-25', '26-35', '36-45', '46+'],
    datasets: [
      {
        label: 'Age Group Distribution',
        data: [10, 40, 30, 15, 5],
        backgroundColor: ['#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
        hoverBackgroundColor: '#ffa726',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    animation: {
      duration: 2500,
      loop: true,
    },
  };

  // Data for Line Charts
  const lineData1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Donations',
        data: [15, 20, 25, 30, 50, 40],
        borderColor: '#8e24aa',
        backgroundColor: 'rgba(142, 36, 170, 0.2)',
        fill: true,
      },
    ],
  };

  const lineData2 = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Profit (in NRS)',
        data: [1000, 1500, 2000, 2500, 2700, 3500],
        borderColor: '#ff9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    animation: {
      duration: 3000,
      easing: 'linear',
      loop: true,
    },
  };

  return (
    <div className="data-visualization">
      <h2 className="chart-title">Sold & Donated Books Visualizations</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>Donated vs Sold Books</h3>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="chart">
          <h3>Books Demanded by Category</h3>
          <Bar data={barData1} options={barOptions} />
        </div>
        <div className="chart">
          <h3>Age Group Distribution</h3>
          <Bar data={barData2} options={barOptions} />
        </div>
        <div className="chart">
          <h3>Monthly Donations Trend</h3>
          <Line data={lineData1} options={lineOptions} />
        </div>
        <div className="chart">
          <h3>Profit in the Last 6 Months</h3>
          <Line data={lineData2} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default SoldAndDonatedBooks;
