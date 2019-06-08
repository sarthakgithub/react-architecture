import React from 'react';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { customBindActionCreators } from '../../../../utils/reducer';
import reducer, { listActions, listSelectors } from '../../reducers/componenta/index';
import rootSaga from '../../sagas/index';
import ComponentAPanel from './component-a';

const sagaMiddleware = createSagaMiddleware();
let devToolsExtension = f => f;

if (window.devToolsExtension) {
  devToolsExtension = window.devToolsExtension();
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    devToolsExtension
  )
);
sagaMiddleware.run(rootSaga);
const mapStateToProps = state => {
  return {
    componentAState: listSelectors.getState(state)
  };
};

const mapDispatchToProps = dispatch => ({
  componentAActions: customBindActionCreators(listActions, dispatch)
});

const ComponentAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentAPanel);

const ComponentA = () => (
  <Provider store={store}>
    <ComponentAContainer />
  </Provider>
);

export default ComponentA;
