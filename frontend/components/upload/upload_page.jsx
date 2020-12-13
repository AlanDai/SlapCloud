import React from "react";

import DragDrop from "../../util/drag_drop";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    }
  }

  handleDrop = files => {
    let fileList = this.state.files;
    files.length.forEach(file => {
      fileList.push(file);
    })
    this.setState({files: fileList});
  }

  uploadItems() {
    if(this.state.slaps.length === 0) {
      return(
        <div>
          <h1>Upload something!</h1>
        </div>
      )
    } else {
      return(
        <div>
          {this.state.files.forEach(file => (
            <h1>file</h1>
          ))}
        </div>
      )
    }
  }

  render () {
    return (
      <DragDrop handleDrop={this.handleDrop}>
        {this.uploadItems}
      </DragDrop>
    )
  }
}

export default UploadPage;