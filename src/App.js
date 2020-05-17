import React from 'react';
import './App.css'; 
import { Col, Row } from "react-bootstrap";
import CrunchIngredients from "./CrunchIngredients"
  
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuPanel from './MenuPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <MenuPanel />
          </Col>
          <Col>
            <CrunchIngredients />
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
