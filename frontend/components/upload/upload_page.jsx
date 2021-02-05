import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DragDrop from "../../util/drag_drop";
import UploadForm from "./upload_form";
import SavedUploadItem from "./saved_upload_item.jsx"
import ErrorNotification from "../errors/error_notification";

const NEW_STATE = {
  files: [],
  saved: [],
  errors: [],
  album: null,
  notifications: false,
}

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = NEW_STATE;

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
        <div className="upload-landing">
          <h2>Drag and drop your tracks & albums here</h2>
          <form className="file-upload-form">
            <label htmlFor="file-upload" className="upload-input">
              or choose files to upload
            </label>
             <input
              id="file-upload"
              type="file"
              accept="audio/*"
              multiple
              onChange={this.handleUpload}
             />
          </form>
        </div>
      )
    } else {
      return(
        <div className="upload-form-list">
          {this.state.files.map((file, idx) => (
            <UploadForm key={file.name} file={file} saveSlap={this.saveSlap} cancelUpload={this.cancelUpload}/>
          ))}
        </div>
      )
    }
  }

  handleUpload = e => {
    this.handleDrop(e.target.files);
  }

  cancelUpload = uploadedFile => {
    const files = this.state.files.filter(file => file !== uploadedFile)
    this.setState({ files })
  }

  // for rendering saved items

  saveSlap = (file, slap) => {
    let fileList = this.state.files;
    fileList = fileList.filter(currentFile => currentFile !== file);

    let savedList = this.state.saved;
    savedList.push(slap);

    this.setState({ files: fileList, saved: savedList })
  }

  savedUploadItems() {
    return(
      <div className="saved-item-list">
        {this.state.saved.map((item, idx) => (
          <SavedUploadItem key={idx} item={item} />
        ))}
      </div>
    )
  }

  // submit button

  submitButtons() {
    if(this.state.saved.length > 0) {
      return(
        <form className="upload-form-list-btns" onSubmit={this.handleSubmit}>
          <div className="upload-form-album">
            <label>
              <input
                type="checkbox"
                onChange={e => this.setState({album: e.target.checked})}
              />
              Upload slaps as an album (in this order)
            </label>
            {this.state.album &&
              <input
                className="album-title-input"
                placeholder="Album title"
            />}
          </div>
          <button type="submit">Submit</button>
        </form>
      )
    } else {
      return null;
    }
  }

  handleSubmit = e => {
    if(!this.state.files){
      let errorList = this.state.errors;
      errorList.push("Fill out all slap information before submitting.");
      this.setState({ errors: errorList, notifications: true })
    } else {
      (this.state.album) ?
        this.createAlbum(e.target[1].value) :
        this.uploadSlaps();
    }
  }

  createAlbum = ( albumTitle = null ) => {
    if(albumTitle) {
      let album = {
          name: albumTitle,
          uploader_id: this.props.userId,
      }
      
      $.ajax({
        url: '/api/albums',
        method: 'POST',
        data: { album },
      }).then(albumId => this.uploadSlaps(albumId))
    }
  }

  uploadSlaps = (albumId = null) => {
    this.state.saved.forEach((savedItem, idx) => {
      const formData = new FormData();
      formData.append('slap[audio_file]', savedItem.audio);
      formData.append('slap[name]', savedItem.title);
      formData.append('slap[description]', savedItem.description);
      formData.append('slap[uploader_id]', this.props.userId);
      
      if(savedItem.image) {
        formData.append('slap[image_file]', savedItem.image);
      }
      
      if(albumId) {
        formData.append('slap[album_id]', albumId);
        formData.append('slap[album_order]', idx)
      }

      $.ajax({
        url: '/api/slaps/',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false,
      })
    })
    this.props.history.push("/discover");
  }

  // notifications

  closeNotifications = () => {
    this.setState({notifications: false})
  }

  render () {
    const { errors, notifications } = this.state;
    return (
      <div id="upload-page">
        <DragDrop handleDrop={this.handleDrop}>
          {this.uploadItems()}
          {this.savedUploadItems()}
          {this.submitButtons()}
        </DragDrop>
        {notifications &&
          <ErrorNotification errors={errors} closeNotifications={this.closeNotifications}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  userId: session.id
})

export default withRouter(connect(mapStateToProps)(UploadPage));