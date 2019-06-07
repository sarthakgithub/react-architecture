import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import AccountRoutes from '../account/routes';
import TransactionRoutes from '../transaction/routes';

class NavRoutes extends React.Component {
  componentDidMount(){
    this.props.history.push("/account");
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/transaction">Transaction</Link>
          </li>
        </ul>
        
        <Route path="/transaction" component={TransactionRoutes} />
        <Route path="/account" component={AccountRoutes} />
      </div>
    );
  }
}

export default withRouter(NavRoutes);
