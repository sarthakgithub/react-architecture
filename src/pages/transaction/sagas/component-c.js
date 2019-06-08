import { takeLatest, put, call, select } from 'redux-saga/effects';

import {
  listTypes,
  listActions,
  listSelectors
} from '../reducers/componentc/index';
import { COMPONENT_C_LIST } from '../reducers/componentc/list';

export function* worker() {
  const state = yield select();

  try {
    yield put(listActions.success());
  } catch (err) {
    yield put(listActions.error(err));
  }
}

export function* componentCSaga() {
  yield takeLatest(listTypes[COMPONENT_C_LIST].FETCH, worker);
}
