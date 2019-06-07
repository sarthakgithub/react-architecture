import React from 'react';
import { Link, Route } from 'react-router-dom';
import ComponentC from './components/componentc/index';
import ComponentD from './components/componentd/index';

class TransactionRoutes extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/transaction/componentc">Component C</Link>
          </li>
          <li>
            <Link to="/transaction/componentd">Component D</Link>
          </li>
        </ul>
        <Route path="/transaction/componentc" component={ComponentC} />
        <Route path="/transaction/componentd" component={ComponentD} />
      </div>
    );
  }
}

export default TransactionRoutes;
