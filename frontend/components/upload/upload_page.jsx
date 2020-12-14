import React from "react";

import DragDrop from "../../util/drag_drop";
import UploadFormContainer from "./upload_form_container";
import ErrorNotification from "../errors/error_notification";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      errors: [],
      notifications: false,
    }
  }

  cancelUpload = uploadedFile => {
    const files = this.state.files.filter(file => file !== uploadedFile)
    this.setState({ files })
  }

  handleDrop = files => {
    let fileList = this.state.files;
    let numFiltered = 0;

    for(let i = 0; i < files.length; i++) {
      if(files[i].type === "audio/mpeg") {
        fileList.push(files[i]);
      } else {
        numFiltered++;
      }
    }

    const errorList = this.state.errors
    if(numFiltered === 1){
      errorList.push(`1 of your files is not an audio file and was not uploaded.`)
    } else if (numFiltered !== 0) {
      errorList.push(`${numFiltered} of your files are not audio files and were not uploaded.`)
    }
    
    this.setState({files: fileList, errors: errorList, notifications: true});
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

  closeNotifications = () => {
    this.setState({notifications: false})
  }

  render () {
    const { files, errors, notifications } = this.state;
    return (
      <div>
        <DragDrop handleDrop={this.handleDrop}>
          {this.uploadItems()}
        </DragDrop>
        {notifications &&
          <ErrorNotification errors={errors} closeNotifications={this.closeNotifications}/>
        }
      </div>
    )
  }
}

export default UploadPage;