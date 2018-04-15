import React from 'react';
import { Link } from 'react-router-dom';
import "../Topic.css";

const NumberPatternsAndFractions = () => {
  return (
    <div className="topic-container">
      <div className="topic-header">Number Patterns and Fractions</div>
      <div className="topic-content">
        <div className="content-header">Least Common Multiple</div>
      </div>
      <Link to="/Sixth" className="topic-btn">Back to Topics</Link>
    </div>
  );
};

export default NumberPatternsAndFractions;