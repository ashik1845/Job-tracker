import React from "react";
import {
  Bar,
  Pie
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "../styles/dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ apps }) => {

  if (!apps.length) {
    return <h2>No applications yet</h2>;
  }

  // ======================
  // BASIC CALCULATIONS
  // ======================

  const total = apps.length;
  const offers = apps.filter(a => a.status === "Offer").length;
  const rejected = apps.filter(a => a.status === "Rejected").length;

  const successRate = ((offers / total) * 100).toFixed(1);

  // ======================
  // MONTHLY BAR DATA
  // ======================

  const monthlyData = {};

  apps.forEach(app => {
    const month = new Date(app.appliedDate)
      .toLocaleString("default", { month: "short", year: "numeric" });

    monthlyData[month] = (monthlyData[month] || 0) + 1;
  });

  const barData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: "Applications",
        data: Object.values(monthlyData),
        backgroundColor: "#1976d2",
        barPercentage: 0.5
      }
    ]
  };

  // ======================
  // STATUS PIE DATA
  // ======================

  const statusCounts = {
    Applied: 0,
    "Online Assessment": 0,
    Interview: 0,
    Offer: 0,
    Rejected: 0
  };

  apps.forEach(app => {
    statusCounts[app.status]++;
  });

  const pieData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          "#1976d2",
          "#7b1fa2",
          "#f57c00",
          "#2e7d32",
          "#c62828"
        ]
      }
    ]
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: "white" }
    }
  },
  scales: {
    x: {
      ticks: { color: "white" },
      grid: { color: "#333" }
    },
    y: {
      ticks: { color: "white" },
      grid: { color: "#333" }
    }
  }
};


  return (
    <div className="dashboard-container">

      {/* ================= STAT CARDS ================= */}

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Applications</h3>
          <p>{total}</p>
        </div>

        <div className="stat-card offer-card">
          <h3>Offers</h3>
          <p>{offers}</p>
        </div>

        <div className="stat-card success-card">
          <h3>Success Rate</h3>
          <p>{successRate}%</p>
        </div>

        <div className="stat-card rejected-card">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>
      </div>

      {/* ================= CHARTS ================= */}

      <div className="charts-grid">

        <div className="chart-box">
          <h3>Monthly Applications</h3>
          <Bar data={barData} options={options} />
        </div>

        <div className="chart-box">
          <h3>Status Distribution</h3>
          <Pie data={pieData} options={options} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
