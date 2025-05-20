import React from 'react';

function Contact() {
  return (
    <div className="card mt-4">
      <div className="card-header bg-secondary text-white">Contact</div>
      <div className="card-body">
        <p className="card-text">Get in touch with us.</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Phone:</strong> +91-9876543210</li>
          <li className="list-group-item"><strong>Email:</strong> info@studycircle.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
