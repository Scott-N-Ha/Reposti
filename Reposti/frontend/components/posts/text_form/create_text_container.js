import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Text from './post_form.jsx';

const mapStateToProps = (state, ownProps) => {
  debugger
  
  return {

}};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Text));