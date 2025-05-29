import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:5000/students');
      setStudents(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h4>Student List</h4>
      <ul className="list-group">
        {students.map((s, i) => (
          <li key={i} className="list-group-item">
            {s.name} - {s.regNo} - {s.department} - {s.year} - {s.email} - {s.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
