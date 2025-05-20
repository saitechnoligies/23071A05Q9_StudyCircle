import React, { useState } from 'react';

function UploadMaterial({ onUpload }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !file) return;
    onUpload({ title, fileName: file.name });
    setTitle('');
    setFile(null);
    setSuccess(true);
    e.target.reset();
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card mt-4">
      <div className="card-header bg-warning text-dark">Upload Material</div>
      <div className="card-body">
        {success && <div className="alert alert-success">File uploaded successfully!</div>}
        <p className="card-text">Upload your study materials here.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Material Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter material title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">File</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadMaterial;
