import { combineReducers } from 'redux';

import componentAReducer, {
  selectors as componentASelectors,
  actions as componentAActions
} from './componenta/index';

import componentBReducer, {
  selectors as componentBSelectors,
  actions as componentBActions
} from './componentb/index';

const accountReducer = combineReducers({
  componentA: componentAReducer,
  componentB: componentBReducer
});

export default accountReducer;

export {
  componentASelectors,
  componentAActions,
  componentBSelectors,
  componentBActions
};
