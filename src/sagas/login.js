import { call, put, takeEvery, all } from 'redux-saga/effects';
import request from 'superagent';
import { goToHome } from '../actions/routing';

function loginUser(user) {
  return request
    .post('http://0.0.0.0:4000/api/sessions')
    .send({ user: { username: user.username, password: user.password } });
}

function apiCreateUser(user) {
  request
    .post('http://0.0.0.0:4000/api/users')
    .send({ user: { username: user.username, password: user.password } })
    .end((err, res) => res.body);
}
function sgetUsers() {
  return request.get('http://0.0.0.0:4000/api/users');
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const res = yield call(loginUser, action.user);
    const user = res.body.data;
    yield put({ type: 'SET_CURRENT_USER', user });
    yield put(goToHome());
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* getUsers() {
  try {
    const response = yield call(sgetUsers);
    const users = response.body.data;
    yield put({ type: 'GOT_USERS', users });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* createUser(action) {
  try {
    const user = yield call(apiCreateUser, action.user);
    yield put({ type: 'GOT_USER', user });
    yield put(goToHome());
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* mySaga() {
  yield takeEvery('LOGIN_ATTEMPT', fetchUser);
}

export function* watchGetUsers() {
  yield takeEvery('GET_USERS', getUsers);
}

export function* watchCreateUser() {
  yield takeEvery('CREATE_USER', createUser);
}

export default function* rootSaga() {
  yield all([
    mySaga(),
    watchGetUsers(),
    watchCreateUser(),
  ]);
}
