import React from 'react';
import { Link, Route } from 'react-router-dom';
import ComponentA from './components/componenta/index';
import ComponentB from './components/componentb/index';

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
        <Route path="/account/componenta" component={ComponentA} />
        <Route path="/account/componentb" component={ComponentB} />
      </div>
    );
  }
}

export default AccountRoutes;
