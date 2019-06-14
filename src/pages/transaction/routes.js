import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}

export default TransactionRoutes;
