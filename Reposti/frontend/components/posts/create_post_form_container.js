import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostForm from './post_form.jsx';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));