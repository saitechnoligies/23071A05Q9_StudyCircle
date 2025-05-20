import React from 'react';

function Login() {
  return (
    <div className="card mt-4">
      <div className="card-header bg-success text-white">Login</div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
