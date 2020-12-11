import React from "react";
import { connect } from "react-redux";
import { closeAllModals } from "../../actions/ui_actions";

class ModalScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.closeAllModals();
  }

  render() {
    return(
      <div
        className="modal-screen"
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps =  dispatch => ({
  closeAllModals: () => dispatch(closeAllModals())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);