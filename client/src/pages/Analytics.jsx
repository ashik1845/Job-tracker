import React, { useEffect, useState } from "react";
import API from "../services/api";
import Dashboard from "../components/Dashboard";

const Analytics = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/applications");
      setApps(res.data);
    };
    fetchData();
  }, []);

  return <Dashboard apps={apps} />;
};

export default Analytics;
