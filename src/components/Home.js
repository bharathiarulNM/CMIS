import React from 'react';

const fadeInStyle = {
  animation: 'fadeIn 1.2s ease forwards',
  opacity: 0,
};

const Home = () => {
  return (
    <>
      {/* Inline CSS for animation */}
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        section {
          padding: 2rem 0;
        }
        h2, h3 {
          color: #003366; /* Deep Blue */
        }
        p {
          color: #444;
          font-size: 1.1rem;
        }
        .card {
          border: none;
          transition: transform 0.3s ease;
          cursor: default;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        footer {
          background-color: #003366 !important;
          color: #fff !important;
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: 'auto' }}>
        {/* About Section */}
        <section style={fadeInStyle}>
          <h2 className="text-center mb-4">About Ujaini College of Engineering and Technology</h2>
          <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
            Ujaini College of Engineering and Technology is committed to academic excellence, innovation, and leadership.
            Our mission is to prepare students to be future-ready professionals through world-class education, cutting-edge technology, and holistic development.
          </p>
        </section>

        {/* Courses Offered */}
        <section style={{ ...fadeInStyle, animationDelay: '0.3s' }}>
          <h3 className="text-center mb-4">Courses Offered</h3>
          <div className="row justify-content-center">
            {['Computer Science', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering'].map((course, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow h-100 text-center p-3">
                  <h5 className="card-title">{course}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section style={{ ...fadeInStyle, animationDelay: '0.6s' }}>
          <h3 className="text-center mb-4">College Gallery</h3>
          <div className="row g-3">
            {[
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80'
            ].map((url, index) => (
              <div key={index} className="col-md-4">
                <img
                  src={url}
                  alt={`Campus ${index + 1}`}
                  className="img-fluid rounded shadow"
                  style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="text-center" style={{ ...fadeInStyle, animationDelay: '0.9s' }}>
          <h3 className="mb-3">Contact Us</h3>
          <p>📍 Ujaini College of Engineering and Technology, Tamil Nadu, India</p>
          <p>📞 +91 98765 43210 | 📧 info@ujainicollege.edu.in</p>
        </section>
      </div>
    </>
  );
};

export default Home;
