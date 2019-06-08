import { takeLatest, put, call, select } from 'redux-saga/effects';

import {
  listTypes,
  listActions,
  listSelectors
} from '../reducers/componenta/index';
import { COMPONENT_A_LIST } from '../reducers/componenta/list';

export function* worker() {
  const state = yield select();
  console.log('state', state);
  try {
    yield put(listActions.success());
  } catch (err) {
    yield put(listActions.error(err));
  }
}

export function* componentASaga() {
  yield takeLatest(listTypes[COMPONENT_A_LIST].FETCH, worker);
}
