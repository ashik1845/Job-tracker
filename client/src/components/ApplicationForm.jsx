import React, { useState } from "react";
import API from "../services/api";
import "../styles/form.css";

const ApplicationForm = ({ fetchApps }) => {
  const [form, setForm] = useState({
    companyName: "",
    role: "",
    domain: "",
    interviewDate: ""
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.companyName || !form.role) {
    alert("Company and Role are required");
    return;
  }

  try {
    await API.post("/applications", form);
    fetchApps();
    setForm({
      companyName: "",
      role: "",
      domain: "",
      interviewDate: form.interviewDate || null
    });
  } catch (error) {
    console.error(error.response?.data);
    alert("Something went wrong");
  }
};

  return (
  <div className="form-container">
    <h2>Add Job Application</h2>

    <form className="form" onSubmit={handleSubmit}>

      <div className="input-group">
        <label>Company</label>
        <input
          type="text"
          placeholder="Enter company name"
          value={form.companyName}
          onChange={e => setForm({ ...form, companyName: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label>Role</label>
        <input
          type="text"
          placeholder="Enter role"
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label>Domain</label>
        <input
          type="text"
          placeholder="e.g. Frontend, Backend, AI"
          value={form.domain}
          onChange={e => setForm({ ...form, domain: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label>Interview Date</label>
        <input
          type="date"
          value={form.interviewDate}
          onChange={e => setForm({ ...form, interviewDate: e.target.value })}
        />
      </div>

      <button type="submit" className="submit-btn">
        Add Application
      </button>

    </form>
  </div>
);

};

export default ApplicationForm;
