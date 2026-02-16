import React from "react";
import "../styles/reminder.css";

const ReminderBanner = ({ apps }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const interviews = apps.filter(app =>
    app.interviewDate &&
    new Date(app.interviewDate).toDateString() === tomorrow.toDateString()
  );

  if (!interviews.length) return null;

  return (
    <div className="reminder">
      🚨 Interview Tomorrow!
    </div>
  );
};

export default ReminderBanner;
