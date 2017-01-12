import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_API_ACTION, POST_API_ACTION } from './apiActions';
import { getApiCall, postApiCall } from './api';

export function* getApi(action) {
  yield put({ type: action.types[0] });
  const response = yield call(getApiCall, action.url, action.body);

  if (response.error) {
    yield put({ type: action.types[2], data: response });
  }
  yield put({ type: action.types[1], data: response });
}

export function* postApi(action) {
  yield put({ type: action.types[0] });
  const response = yield call(postApiCall, action.url, action.body);
  if (response.error) {
    yield put({ type: action.types[2], data: response });
  }

  yield put({ type: action.types[1], data: response });
}

export function* watchGetApi() {
  yield* takeEvery(GET_API_ACTION, getApi);
}

export function* watchPostApi() {
  yield* takeEvery(POST_API_ACTION, postApi);
}
