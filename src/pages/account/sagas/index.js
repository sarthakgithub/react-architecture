import { all } from 'redux-saga/effects';
import { componentASaga } from './component-a';

export default function* rootSaga() {
  yield all([componentASaga()]);
}
