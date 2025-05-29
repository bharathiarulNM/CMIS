import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FacultyList() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:5000/faculty');
      setFaculty(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h4>Faculty List</h4>
      <ul className="list-group">
        {faculty.map((f, i) => (
          <li key={i} className="list-group-item">
            {f.name} - {f.dept} - {f.email} - {f.phone} - Rs.{f.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyList;
