import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-content">
       <h1>
  Manage Your <span>Job Search Journey</span> Smarter 
</h1>

<p>
  Track job applications, monitor interviews, analyze success rates,
  and stay organized throughout your career growth.
</p>


        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/applications")}
          >
            Start Tracking
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/analytics")}
          >
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
