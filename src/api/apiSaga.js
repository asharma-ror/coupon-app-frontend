import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_API_ACTION, POST_API_ACTION, DELETE_API_ACTION } from './apiActions';
import { getApiCall, postApiCall, deleteApiCall } from './api';

function* manageResponse(action, response) {
  if (response.err) {
    yield put({ type: action.types[2], data: response });
  } else {
    yield put({ type: action.types[1], data: response });
  }
}

function* getApi(action) {
  yield put({ type: action.types[0] });
  const response = yield call(getApiCall, action.url, action.body);
  yield call(manageResponse, action, response);
}

function* postApi(action) {
  yield put({ type: action.types[0] });
  const response = yield call(postApiCall, action.url, action.body);
  yield call(manageResponse, action, response);
}

function* deleteApi(action) {
  yield put({ type: action.types[0] });
  const response = yield call(deleteApiCall, action.url, action.body);
  yield call(manageResponse, action, response);
}

export function* watchGetApi() {
  yield takeEvery(GET_API_ACTION, getApi);
}

export function* watchPostApi() {
  yield takeEvery(POST_API_ACTION, postApi);
}

export function* watchDeleteApi() {
  yield takeEvery(DELETE_API_ACTION, deleteApi);
}
