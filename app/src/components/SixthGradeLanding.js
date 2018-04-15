import React from "react";
import { Link, Route } from "react-router-dom";
import "./Landing.css";
import NumberPatternsAndFractions from './sixth/NumberPatternsAndFractions';
import FractionAndDecimalOperations from './sixth/FractionAndDecimalOperations';
import Integers from './sixth/Integers';
import ExpressionsAndEquations from './sixth/ExpressionsAndEquations';
import RatiosAndProportions from './sixth/RatiosAndProportions';
import Percents from './sixth/Percents';
import AnalyzingData from './sixth/AnalyzingData';
import Probability from './sixth/Probability';
import GeometricFigures from './sixth/GeometricFigures';
import MeasurementAndArea from './sixth/MeasurementAndArea';
import SurfaceAreaAndVolume from './sixth/SurfaceAreaAndVolume';
import Graphing from './sixth/Graphing';

const SixthGradeLanding = () => {
  const topics = {
    "Number Patterns and Fractions": NumberPatternsAndFractions,
    "Fraction and Decimal Operations": FractionAndDecimalOperations,
    "Integers": Integers,
    "Expressions and Equations": ExpressionsAndEquations,
    "Ratios and Proportions": RatiosAndProportions,
    "Percents": Percents,
    "Analyzing Data": AnalyzingData,
    "Probability": Probability,
    "Geometric Figures": GeometricFigures,
    "Measurement and Area": MeasurementAndArea,
    "Surface Area and Volume": SurfaceAreaAndVolume,
    "Graphing": Graphing
  };
  return (
    <div className="Landing-page">
      <Route
        exact
        path="/Sixth"
        render={() => {
          return (
            <div className="Landing-container">
              <h3 className="Landing-header">6TH GRADE TOPICS</h3>
              {Object.keys(topics).map((topic, i) => {return <Link key={`topic-btn${i}`} className="Landing-button" to={`/Sixth/${topic.replace(/ /g, "")}`}>{topic}</Link>;})}
            </div>
          );
        }}
      />
      {Object.keys(topics).map((topic, i) => <Route key={`topic-content${i}`} path={`/Sixth/${topic.replace(/ /g, "")}`} component={topics[topic]} />)}
    </div>
  );
};

export default SixthGradeLanding;
