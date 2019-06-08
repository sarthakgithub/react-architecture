import React from 'react';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { customBindActionCreators } from '../../../../utils/reducer';
import reducer, { listActions, listSelectors } from '../../reducers/componentc/index';
import rootSaga from '../../sagas/index';
import ComponentCPanel from './component-c';

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
    componentCState: listSelectors.getState(state)
  };
};

const mapDispatchToProps = dispatch => ({
  componentCActions: customBindActionCreators(listActions, dispatch)
});

const ComponentCContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentCPanel);

const ComponentC = () => (
  <Provider store={store}>
    <ComponentCContainer />
  </Provider>
);

export default ComponentC;
