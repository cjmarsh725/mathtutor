import React from 'react';
import { Link } from 'react-router-dom';
import "../Topic.css";

const SurfaceAreaAndVolume = () => {
  return (
    <div className="topic-container">
      <div className="topic-header">Surface Area and Volume</div>
      <div className="topic-content">
        Under Construction
      </div>
      <Link to="/Sixth" className="topic-btn">Back to Topics</Link>
    </div>
  );
};

export default SurfaceAreaAndVolume;