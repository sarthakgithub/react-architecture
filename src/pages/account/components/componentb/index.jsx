
import React from 'react';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { customBindActionCreators } from '../../../../utils/reducer';
import reducer, { listActions, listSelectors } from '../../reducers/componentb/index';
import rootSaga from '../../sagas/index';
import ComponentBPanel from './component-b';

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
    componentBState: listSelectors.getState(state)
  };
};

const mapDispatchToProps = dispatch => ({
  componentBActions: customBindActionCreators(listActions, dispatch)
});

const ComponentBContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentBPanel);

const ComponentB = () => (
  <Provider store={store}>
    <ComponentBContainer />
  </Provider>
);

export default ComponentB;
