import { combineReducers } from 'redux';

import accountReducer, {
  selectors as accountSelectors,
  actions as accountActions
} from './account';

const allAccountReducer = combineReducers({
  account: accountReducer,
});

export default allAccountReducer;

export {
  accountSelectors,
  accountActions  
};
