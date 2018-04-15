import React, { Component } from "react";
import { Route } from 'react-router-dom';
import "./App.css";

import GradesNav from "./components/GradesNav";
import SixthGradeLanding from "./components/SixthGradeLanding";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-container">
          <div className="App-header-center">
            <header className="App-header">
              <h1 className="App-title">Junior High Math</h1>
            </header>
            <GradesNav />
          </div>
        </div>
        <div className="App-content-container">
          <Route path='/sixth' component={SixthGradeLanding} />
        </div>
      </div>
    );
  }
}

export default App;
