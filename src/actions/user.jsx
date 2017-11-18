const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const GOT_USER = 'GOT_USER';

function loginUser(username, password) {
  return {
    type: LOGIN_ATTEMPT,
    username,
    password,
  };
}

function loginSuccess(data) {
  return {
    type: GOT_USER,
    data,
  };
}
export { loginSuccess, loginUser };
