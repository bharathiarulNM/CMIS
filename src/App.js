import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import FacultyForm from './components/FacultyForm';
import FacultyList from './components/FacultyList';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{ backgroundColor: '#123456', color: '#fff' }} className="py-3">
  <div className="container text-center">
    <h1>College Management Information System</h1>
  </div>
</header>

        {/* Navbar */}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">CMIS</Link>

            {/* Hamburger toggle - visible only on mobile */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Normal horizontal navbar links - visible only on desktop */}
            <ul className="navbar-nav d-none d-lg-flex flex-row ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/students/add">Add Student</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/students">View Students</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/faculty/add">Add Faculty</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/faculty">View Faculty</Link>
              </li>
            </ul>

            {/* Offcanvas Sidebar for mobile */}
            <div
              className="offcanvas offcanvas-start text-bg-dark"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CMIS Menu</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/students/add">Add Student</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/students">View Students</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/faculty/add">Add Faculty</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/faculty">View Faculty</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/students/add" element={<StudentForm />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/faculty/add" element={<FacultyForm />} />
            <Route path="/faculty" element={<FacultyList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <div className="container">
            &copy; {new Date().getFullYear()} CMIS. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
