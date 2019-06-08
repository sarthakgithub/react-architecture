import { combineReducers } from 'redux';

import listReducer, {
  selectors as listSelectors,
  actions as listActions,
  types as listTypes
} from './list';


const componentBReducer = combineReducers({
  componentBList: listReducer,
});

export default componentBReducer;

export {
  listSelectors,
  listActions,
  listTypes
};
