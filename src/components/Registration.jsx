import React from 'react';

function Registration() {
  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white">Registration</div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm password" />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter address" />
              </div>
              <div className="mb-3">
                <label className="form-label">Course</label>
                <input type="text" className="form-control" placeholder="Enter course name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
