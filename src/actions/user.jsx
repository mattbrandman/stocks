const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const GOT_USER = 'GOT_USER';

function loginUser(user) {
  return {
    type: LOGIN_ATTEMPT,
    user,
  };
}

function loginSuccess(data) {
  return {
    type: GOT_USER,
    data,
  };
}
export { loginSuccess, loginUser };
