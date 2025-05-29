import React, { useState } from 'react';
import axios from 'axios';

function FacultyForm() {
  const [faculty, setFaculty] = useState({
    name: '', dept: '', email: '', phone: '', salary: ''
  });

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/faculty', faculty);
    alert('Faculty added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <h4>Add Faculty</h4>
      {Object.keys(faculty).map((key) => (
        <input
          key={key}
          name={key}
          value={faculty[key]}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          required
        />
      ))}
      <button className="btn btn-success">Submit</button>
    </form>
  );
}

export default FacultyForm;
