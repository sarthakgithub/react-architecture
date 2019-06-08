import { actionCreator, typeCreatorForApi } from '../../../../utils/reducer';

export const COMPONENT_C_LIST = 'COMPONENT_C_LIST';

export const types = {
  ...typeCreatorForApi(COMPONENT_C_LIST)
};

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case types[COMPONENT_C_LIST].FETCH:
      return {
        ...state,
        loading: true
      };
    case types[COMPONENT_C_LIST].SUCCESS:
      return {
        ...state,
        data: [{ id: 1, name: 'daniel' }, { id: 2, name: 'chris' }],
        loading: false
      };
    case types[COMPONENT_C_LIST].ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error occured in component a list'
      };
    case types[COMPONENT_C_LIST].RESET:
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

const fetch = actionCreator(types[COMPONENT_C_LIST].FETCH);
const success = actionCreator(types[COMPONENT_C_LIST].SUCCESS);
const error = actionCreator(types[COMPONENT_C_LIST].ERROR);
const reset = actionCreator(types[COMPONENT_C_LIST].RESET);

const actions = {
  fetch,
  success,
  error,
  reset
};

const getState = state => state.componentCList;

const selectors = {
  getState
};

export { selectors, actions };
