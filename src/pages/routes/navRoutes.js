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
const ComponentADynamic = lazy(() => import('../account/components/componenta/index'));
const ComponentBDynamic = lazy(() => import('../account/components/componentb/index'));
const ComponentCDynamic = lazy(() => import('../transaction/components/componentc/index'));
const ComponentDDynamic = lazy(() => import('../transaction/components/componentd/index'));

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
            <Route
              path="/transaction"
              render={props => (
                <ErrorBoundary>
                  <TransactionRoutes {...props} />
                  <Route path="/transaction/componentc" component={ComponentCDynamic} />
                  <Route path="/transaction/componentd" component={ComponentDDynamic} />
                </ErrorBoundary>
              )}
            />
            <Route
              path="/account"
              render={props => (
                <ErrorBoundary>
                  <AccountRoutes {...props} />
                  <Route path="/account/componenta" component={ComponentADynamic} />
                  <Route path="/account/componentb" component={ComponentBDynamic} />
                </ErrorBoundary>
              )}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(NavRoutes);
