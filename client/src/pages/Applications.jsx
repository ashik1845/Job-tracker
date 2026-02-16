import React, { useEffect, useState } from "react";
import API from "../services/api";
import ApplicationForm from "../components/ApplicationForm";
import KanbanBoard from "../components/KanbanBoard";
import ReminderBanner from "../components/ReminderBanner";

const Applications = () => {
  const [apps, setApps] = useState([]);

  const fetchApps = async () => {
    const res = await API.get("/applications");
    setApps(res.data);
  };

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <>
      <ReminderBanner apps={apps} />
      <ApplicationForm fetchApps={fetchApps} />
      <KanbanBoard apps={apps} fetchApps={fetchApps} />
    </>
  );
};

export default Applications;
