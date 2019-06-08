import React, { lazy, Suspense } from 'react';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
//import Loadable from 'react-loadable';

// // code splitting using react-lodable
// const Loading = ({ error }) => {
//   if (error) {
//     return 'Error';
//   } else {
//     return <h3>Loading...</h3>;
//   }
// }

// const TransactionRoutes = Loadable({
//   loader: () => import('../transaction/routes'),
//   loading: Loading
// });

// const AccountRoutes = Loadable({
//   loader: () => import('../account/routes'),
//   loading: Loading
// });

const TransactionRoutes = lazy(() => import('../transaction/routes'));
const AccountRoutes = lazy(() => import('../account/routes'));
const LoadingMessage = () => 'Loading...';

class NavRoutes extends React.Component {
  componentDidMount() {
    this.props.history.push('/account');
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

        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route path="/transaction" component={TransactionRoutes} />
            <Route path="/account" render={props => (
                <ErrorBoundary>
                  <AccountRoutes {...props} />
                </ErrorBoundary>
              )} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(NavRoutes);
