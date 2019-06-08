import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from './navRoutes';

class MainApp extends React.Component {
  render() {
    return (
      <Router>
        <NavRoutes />
      </Router>
    );
  }
}

export default MainApp;
