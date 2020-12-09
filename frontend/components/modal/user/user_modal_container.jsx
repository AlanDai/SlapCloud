import React from "react";
import { connect } from 'react-redux';

import UserModal from './user_modal';

const mapStateToProps = ({ modal }) => ({
  isOpen: modal.user,
  emailExists: state.modal.emailExists
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);