const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const CREATE_USER = 'CREATE_USER';
const GOT_USER = 'GOT_USER';
const GET_USERS = 'GET_USERS';

function loginUser(user) {
  return {
    type: LOGIN_ATTEMPT,
    user,
  };
}

function getUsers() {
  return {
    type: GET_USERS,
  };
}

function loginSuccess(data) {
  return {
    type: GOT_USER,
    data,
  };
}

function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}
export { createUser, getUsers, loginSuccess, loginUser };
