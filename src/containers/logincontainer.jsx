import { connect } from 'react-redux'
import { loginUser } from '../actions/user'
import LoginForm from '../components/login-form'

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (data) => {
      dispatch(loginUser(data))
    }
  }
}

const LoginContainer = connect(null, mapDispatchToProps)(LoginForm);

export default LoginContainer;
