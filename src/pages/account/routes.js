import React from 'react';
import { Link } from 'react-router-dom';

class AccountRoutes extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/account/componenta">Component A</Link>
          </li>
          <li>
            <Link to="/account/componentb">Component B</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default AccountRoutes;
