import { actionCreator, typeCreatorForApi } from '../../../../utils/reducer';

export const COMPONENT_A_LIST = 'COMPONENT_A_LIST';

export const types = {
  ...typeCreatorForApi(COMPONENT_A_LIST)
};

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types[COMPONENT_A_LIST].FETCH:
      return {
        ...state,
        loading: true
      };
    case types[COMPONENT_A_LIST].SUCCESS:
      return {
        ...state,
        data: [{ id: 1, name: 'john' }, { id: 2, name: 'kevin' }],
        loading: false
      };
    case types[COMPONENT_A_LIST].ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case types[COMPONENT_A_LIST].RESET:
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

const fetch = actionCreator(types[COMPONENT_A_LIST].FETCH);
const success = actionCreator(types[COMPONENT_A_LIST].SUCCESS);
const error = actionCreator(types[COMPONENT_A_LIST].ERROR);
const reset = actionCreator(types[COMPONENT_A_LIST].RESET);

const actions = {
  fetch,
  success,
  error,
  reset
};

const getState = state => state.componentAList;

const selectors = {
  getState
};

export { selectors, actions };
