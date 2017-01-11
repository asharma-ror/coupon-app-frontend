import { call } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';

const testFunction = () => {
  console.log('testing Saga');
  console.log('If this is presented then it is woking fine');
};

function* root() {
  yield call(testFunction);
}

const runRootSaga: () => void = () => sagaMiddleware.run(root);

export default runRootSaga;
