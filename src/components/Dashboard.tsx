import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const toggleIPTSections = () => {
    setShowIPTSections(!showIPTSections);
  };  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="card-title">Student Dashboard</h3>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
          <div className="mt-4">
            <h5>Welcome {userEmail || 'Student'}!</h5>
            <p>This is your dashboard where you can view your information.</p>
          </div>
        </div>
      </div>

      {showIPTSections && (
        <div className="mt-4">
          <ApplicationForm />
          <ArrivalNote />
          <SupervisorLogbookEntry />
          <EvaluationForm />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
