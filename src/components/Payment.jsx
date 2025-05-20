import React, { useState } from 'react';

function Payment() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card mt-4">
      <div className="card-header bg-danger text-white">Payment</div>
      <div className="card-body">
        {success && <div className="alert alert-success">Payment successful!</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Cardholder Name</label>
            <input type="text" className="form-control" placeholder="Enter cardholder name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input type="text" className="form-control" placeholder="Enter card number" maxLength="16" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Expiry Date</label>
              <input type="text" className="form-control" placeholder="MM/YY" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">CVV</label>
              <input type="password" className="form-control" placeholder="CVV" maxLength="4" required />
            </div>
          </div>
          <button type="submit" className="btn btn-danger">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
