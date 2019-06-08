import { actionCreator, typeCreatorForApi } from '../../../../utils/reducer';

export const COMPONENT_B_LIST = 'COMPONENT_B_LIST';

export const types = {
  ...typeCreatorForApi(COMPONENT_B_LIST)
};

const INITIAL_STATE = {
  data: null, 
  loading: false, 
  error: null
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case types[COMPONENT_B_LIST].FETCH:
      return {
        ...state,
        loading:true
      };
    case types[COMPONENT_B_LIST].SUCCESS:
      return {
        ...state,
        data: [{id:1, name:'john'}, {id:2, name: 'kevin'}],
        loading: false
      };
    case types[COMPONENT_B_LIST].ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error occured in component a list'
      };
    case types[COMPONENT_B_LIST].RESET:
      return {
        ...state,
        data: null,
        loading: false,
        error: null
      };
    

    default:
      return state;
  }
};

const fetch = actionCreator(types[COMPONENT_B_LIST].FETCH);
const success = actionCreator(types[COMPONENT_B_LIST].SUCCESS);
const error = actionCreator(types[COMPONENT_B_LIST].ERROR);
const reset = actionCreator(types[COMPONENT_B_LIST].RESET);

const actions = {
  fetch,
  success, 
  error, 
  reset
};

const getState = state => state.componentBList;

const selectors = {
  getState
};

export { selectors, actions };
