import React from "react";
import { connect } from 'react-redux';

import UserModal from './user_modal';

const mapStateToProps = ({ session }) => ({
  emailExists: session.emailExists
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);