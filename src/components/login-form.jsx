import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"> Username </label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password"> Password </label>
        <Field name="password" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

