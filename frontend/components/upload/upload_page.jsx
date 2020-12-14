import React from "react";

import DragDrop from "../../util/drag_drop";
import UploadForm from "./upload_form";
import SavedUploadItem from "./saved_upload_item.jsx"
import ErrorNotification from "../errors/error_notification";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      saved: [],
      errors: [],
      notifications: false,
    }

    this.saveSlap = this.saveSlap.bind(this);
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
    let errorNotification = false;
    if(numFiltered === 1){
      errorList.push(`1 of your files is not an audio file and was not uploaded.`)
    } else if (numFiltered !== 0) {
      errorList.push(`${numFiltered} of your files are not audio files and were not uploaded.`)
      errorNotification = true;
    }
    
    this.setState({files: fileList, errors: errorList, notifications: errorNotification});
  }

  // for rendering upload form 

  uploadItems() {
    if(this.state.files.length === 0 && this.state.saved.length === 0) {
      return(
        <div><h1>Upload something!</h1></div>
      )
    } else {
      return(
        <div>
          {this.state.files.map((file, idx) => (
            <UploadForm key={idx} file={file} saveSlap={this.saveSlap} cancelUpload={this.cancelUpload}/>
          ))}
        </div>
      )
    }
  }

  cancelUpload = uploadedFile => {
    const files = this.state.files.filter(file => file !== uploadedFile)
    this.setState({ files })
  }

  // for rendering saved items

  saveSlap(file, slap) {
    let fileList = this.state.files;
    fileList = fileList.filter(currentFile => currentFile !== file);

    let savedList = this.state.saved;
    savedList.push(slap);

    this.setState({ files: fileList, saved: savedList })
  }

  savedUploadItems() {
    return(
      <div>
        {this.state.saved.map((item, idx) => (
          <SavedUploadItem key={idx} item={item} />
        ))}
      </div>
    )
  }

  // submit button

  submitButton() {
    if(this.state.files.length > 0 || this.state.saved.length > 0){
      return(
        <button onClick={this.handleClick}>Submit</button>
      )
    }
  }

  handleClick = e => {
    if(this.state.saved.length >= 0 || this.state.files.length >= 0) {
      if(this.state.files.length >= 0){
        this.setState({ errors: this.state.errors.push("Fill out all slap information before submitting.")})
      } else {
        // upload to s3!
      }
    } else {
      this.setState({ errors: this.state.errors.push("Nothing to upload.")})
    }
  }

  // notifications

  closeNotifications = () => {
    this.setState({notifications: false})
  }

  render () {
    const { files, saved, errors, notifications } = this.state;
    return (
      <div>
        <DragDrop handleDrop={this.handleDrop}>
          {this.uploadItems()}
          {this.savedUploadItems()}
        </DragDrop>
        {this.submitButton()}
        {notifications &&
          <ErrorNotification errors={errors} closeNotifications={this.closeNotifications}/>
        }
      </div>
    )
  }
}

export default UploadPage;