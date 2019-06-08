import { combineReducers } from 'redux';

import listReducer, {
  selectors as listSelectors,
  actions as listActions,
  types as listTypes
} from './list';


const componentAReducer = combineReducers({
  componentAList: listReducer,
});

export default componentAReducer;

export {
  listSelectors,
  listActions,
  listTypes
};
