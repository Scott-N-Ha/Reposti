import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from './post.jsx';

const mapStateToProps = ({entities: { users }}, ownProps) => {

  return {
    author: users[ownProps.post.author_id].username,
  }
}

const mapDispatchToProps = dispatch => ({
  // will need to include a delete post, edit post APIs
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post));