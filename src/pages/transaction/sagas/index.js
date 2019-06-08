import { all } from 'redux-saga/effects';
import { componentCSaga } from './component-c';

export default function* rootSaga() {
  yield all([componentCSaga()]);
}
