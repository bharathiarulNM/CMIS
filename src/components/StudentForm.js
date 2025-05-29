import React, { useState } from 'react';
import axios from 'axios';

function StudentForm() {
  const [student, setStudent] = useState({
    name: '', regNo: '', department: '', year: '', email: '', phone: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/students', student);
    alert('Student added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <h4>Add Student</h4>
      {Object.keys(student).map((key) => (
        <input
          key={key}
          name={key}
          value={student[key]}
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

export default StudentForm;
