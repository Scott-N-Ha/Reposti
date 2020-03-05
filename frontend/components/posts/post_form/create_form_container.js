import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostForm from './post_form.jsx.js';
import { createPost } from '../../../actions/posts_actions.js';

const mapStateToProps = (state, ownProps) => {

  
  return {

}};

const mapDispatchToProps = dispatch => ({
  postAction: post => dispatch(createPost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));