import React from 'react';

function CheckMaterial({ materials = [] }) {
  return (
    <div className="card mt-4">
      <div className="card-header bg-info text-white">Check Material</div>
      <div className="card-body">
        {materials.length === 0 ? (
          <p className="card-text">No materials uploaded yet.</p>
        ) : (
          <ul className="list-group">
            {materials.map((mat, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                {mat.title}
                <span className="badge bg-secondary">{mat.fileName}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CheckMaterial;
