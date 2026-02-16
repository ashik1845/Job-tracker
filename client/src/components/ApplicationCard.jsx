import React from "react";
import "../styles/card.css";
import { statusColors } from "../utils/statusColors";

const ApplicationCard = ({ app }) => {
  return (
    <div className={`card ${statusColors[app.status]}`}>
      <h4>{app.companyName}</h4>
      <p>{app.role}</p>

      {app.domain && (
        <span className="domain">{app.domain}</span>
      )}

      {app.interviewDate && (
        <small>
          📅 {new Date(app.interviewDate).toLocaleDateString()}
        </small>
      )}
    </div>
  );
};

export default ApplicationCard;
