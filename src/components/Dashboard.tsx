import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArrivalNote() {
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Arrival note submitted:', note);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setNote('');
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="fs-4 fw-bold mb-3">Arrival Note</h2>
      {isSubmitted ? (
        <div className="alert alert-success mb-3">
          Arrival note submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control mb-3"
            placeholder="Write your arrival note here..."
            value={note}
            onChange={handleChange}
            required
            rows={4}
          ></textarea>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

function SupervisorLogbookEntry() {
  const [entry, setEntry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEntry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logbook entry submitted:', entry);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setEntry('');
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="fs-4 fw-bold mb-3">Logbook Entry</h2>
      {isSubmitted ? (
        <div className="alert alert-success mb-3">
          Logbook entry submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control mb-3"
            placeholder="Supervisor's logbook notes..."
            value={entry}
            onChange={handleChange}
            required
            rows={4}
          ></textarea>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

function EvaluationForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    score: '',
    remarks: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ studentName: '', score: '', remarks: '' });
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="fs-4 fw-bold mb-3">Evaluation Form</h2>
      {isSubmitted ? (
        <div className="alert alert-success mb-3">
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Student Name"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="number"
              placeholder="Score (0–100)"
              name="score"
              value={formData.score}
              onChange={handleChange}
              min="0"
              max="100"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              required
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    program: '',
    companyName: '',
    applicationDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ 
        fullName: '', 
        studentId: '', 
        program: '', 
        companyName: '', 
        applicationDetails: '' 
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="fs-4 fw-bold mb-3">Application Form</h2>
      {isSubmitted ? (
        <div className="alert alert-success mb-3">
          Application submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Program of Study"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Application Details"
              name="applicationDetails"
              value={formData.applicationDetails}
              onChange={handleChange}
              required
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");
  const [showIPTSections, setShowIPTSections] = useState(false);

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
            <h1 className="card-title fs-2 fw-bold">Students Dashboard</h1>
            <button 
              onClick={handleLogout} 
              className="btn btn-danger"
            >
              <span>Logout</span>
            </button>
          </div>
          <div className="mt-4">
            <h2 className="fs-4 text-muted">Welcome <span className="fw-semibold">{userEmail || "Student"}</span>!</h2>
            <p className="text-secondary mt-2">This is your dashboard where you can view your information and manage your IPT tasks.</p>
            <button
              onClick={toggleIPTSections}
              className="btn btn-primary mt-3"
            >
              {showIPTSections ? "Hide IPT Sections" : "Show IPT Sections"}
            </button>
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
