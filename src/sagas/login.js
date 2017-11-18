import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'superagent';

function loginUser(user) {
  request
    .post('/login/')
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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('LOGIN_ATTEMPT', fetchUser);
}

export default mySaga;
