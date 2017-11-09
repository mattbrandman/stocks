import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title = 'My First Blog Post', text = 'Hello World!' }) => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-6">
        <h1> { title } </h1>
        <p>{ text } </p>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Post.defaultProps = {
  title: 'My First Blog Post',
  text: 'Hello World!',
};
export default Post;
