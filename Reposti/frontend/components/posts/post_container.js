import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from './post.jsx';

// const mapStateToProps = ({})

const mapDispatchToProps = dispatch => ({
  // will need to include a delete post, edit post APIs
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Post));