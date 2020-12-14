import React from "react";

import DragDrop from "../../util/drag_drop";
import UploadFormContainer from "./upload_form_container";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    }
  }

  cancelUpload = uploadedFile => {
    const files = this.state.files.filter(file => file !== uploadedFile)
    this.setState({ files })
  }

  handleDrop = files => {
    let fileList = this.state.files;
    for(let i = 0; i < files.length; i++) {
      fileList.push(files[i]);
    }
    this.setState({files: fileList});
  }

  uploadItems() {
    if(this.state.files.length === 0) {
      return(
        <div>
          <h1>Upload something!</h1>
        </div>
      )
    } else {
      return(
        <div>
          {this.state.files.map((file, idx) => (
            <UploadFormContainer key={idx} file={file} cancelUpload={this.cancelUpload}/>
          ))}
        </div>
      )
    }
  }

  render () {
    return (
      <DragDrop handleDrop={this.handleDrop}>
        {this.uploadItems()}
      </DragDrop>
    )
  }
}

export default UploadPage;