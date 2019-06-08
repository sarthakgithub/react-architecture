export const actionCreator = type => payload => ({
  type,
  payload
});

export const customTypeCreator = (prefix, types) =>
  types.reduce((returnedObj, value) => {
    returnedObj[value] = `${prefix}_${value}`;
    return returnedObj;
  }, {});

export const typeCreatorForApi = type => ({
  [type]: {
    FETCH: `${type}_FETCH`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
    RESET: `${type}_RESET`
  }
});

const customBindActionCreator = (ac, dispatch) => {
  return function() {
    return dispatch(ac.apply(this, arguments));
  };
};

export const customBindActionCreators = (actionCreators, dispatch) => {
  if (typeof actionCreators === 'function') {
    return customBindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      'Action Creators are not Objects or action creators may be null'
    );
  }

  const keys = Object.keys(actionCreators);
  const customBoundActionCreators = {};
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const actionsObj = actionCreators[key];
    customBoundActionCreators[key] = customBindActionCreators(
      actionsObj,
      dispatch
    );
  }

  return customBoundActionCreators;
};
