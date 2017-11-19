import { call, put, takeEvery, all } from 'redux-saga/effects';
import request from 'superagent';

function loginUser(user) {
  request
    .post('https://stocks.rossfrank.party/api/users')
    .send({ username: user.username, password: user.password })
    .end((err, res) => res.body);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(loginUser, action.user);
    yield put({ type: 'GOT_USER', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* getUsers() {
  const getAllUsers = request.get('https://stocks.rossfrank.party/api/users');
  try {
    const response = yield getAllUsers;
    const users = response.body.data;
    console.log(users);
    yield put({ type: 'GOT_USERS', users });
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

export default function* rootSaga() {
  yield all([
    mySaga(),
    watchGetUsers(),
  ]);
}
