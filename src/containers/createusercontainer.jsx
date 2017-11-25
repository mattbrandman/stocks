import { connect } from 'react-redux';
import { createUser } from '../actions/user';
import CreateUserForm from '../components/create-user-form';

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(createUser(data));
  },
});

const CreateUserContainer = connect(null, mapDispatchToProps)(CreateUserForm);

export default CreateUserContainer;
