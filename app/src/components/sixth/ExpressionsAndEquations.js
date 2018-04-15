import React from 'react';
import { Link } from 'react-router-dom';
import "../Topic.css";

const ExpressionsAndEquations = () => {
  return (
    <div className="topic-container">
      <div className="topic-header">Expressions and Equations</div>
      <div className="topic-content">
        Under Construction
      </div>
      <Link to="/Sixth" className="topic-btn">Back to Topics</Link>
    </div>
  );
};

export default ExpressionsAndEquations;