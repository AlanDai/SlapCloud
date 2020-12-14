import { connect } from "react-redux";

import UploadForm from "./upload_form";

const mapStateToProps = (state, ownProps) => ({
  file: ownProps.file,
  cancelUpload: file => ownProps.cancelUpload(file)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);