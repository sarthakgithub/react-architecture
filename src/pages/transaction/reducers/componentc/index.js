import { combineReducers } from 'redux';

import listReducer, {
  selectors as listSelectors,
  actions as listActions,
  types as listTypes
} from './list';


const componentCReducer = combineReducers({
  componentCList: listReducer,
});

export default componentCReducer;

export {
  listSelectors,
  listActions,
  listTypes
};
