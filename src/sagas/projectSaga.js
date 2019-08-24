import { takeLatest, put } from 'redux-saga/effects';
import types from '../actions/types';

// Watchers
export function* watchCreateProject(project) {
  yield takeLatest(types.CREATE_PROJECT, createProjectAsync);
}

// Workers
function* createProjectAsync(project) {
  yield console.log(project);
  yield put({
    type: types.CREATE_PROJECT_ASYNC,
    payload: project.payload
  });
}
