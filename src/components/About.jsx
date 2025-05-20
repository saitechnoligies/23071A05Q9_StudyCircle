import React from 'react';

function About() {
  return (
    <div className="card mt-4">
      <div className="card-header bg-dark text-white">About</div>
      <div className="card-body">
        <h5 className="card-title">About Study Circle</h5>
        <p className="card-text">
          Study Circle is an online platform for collaborative learning and resource sharing. Register, access and upload study materials, and manage academic activities easily and securely.
        </p>
      </div>
      {/* <footer className="text-center mt-4 mb-2 text-muted">
        &copy; {new Date().getFullYear()} Copyright@23071A05Q9
      </footer> */}
    </div>
  );
}

export default About;
