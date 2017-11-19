const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const GOT_USER = 'GOT_USER';
const GET_USERS = 'GET_USERS';

function loginUser(user) {
  return {
    type: LOGIN_ATTEMPT,
    user,
  };
}

function getUsers() {
  console.log('here');
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
export { getUsers, loginSuccess, loginUser };
