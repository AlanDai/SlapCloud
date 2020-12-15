import React from 'react';
import { $CombinedState } from 'redux';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      imageFile: null,
    }
  }

  handleCancel = () => {
    this.props.cancelUpload(this.props.file);
  }

  handleSubmit = e => {
    e.preventDefault();
    const slap = {
      title: e.target[1].value,
      description: e.target[2].value,
      audio: this.props.file,
      image: e.target[0].files[0]
    }
    this.props.saveSlap(this.props.file, slap)
  }

  loadImage() {
    var reader = new FileReader();
    reader.onload = () => {
      this.setState({ imageUrl: reader.result, imageFile: this.state.image});
    }

    if (this.state.imageFile) {
      reader.readAsURL(this.state.imageFile);
      return (
        <img className="upload-slap-image" src={this.state.imageUrl}/>
      )

    } else {
      return (
        <div className="white-square"/>
      )
    }
  }

  render() {
    const { file } = this.props;

    return (
      <div className="upload-form-container">
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <div className="upload-form-input-container">
            
            <div className="image-container">
              {this.loadImage()}
              <label htmlFor="image-upload" className="upload-input">
                <div><i className="fas fa-camera" /> Upload image</div>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
              />
            </div>

            <div className="upload-form-slap-inputs">
              <label>Title
                <br />
                <input
                  type="text"
                  placeholder="Name your slap"
                  minLength="1"
                  defaultValue={file.name}
                />
              </label>
              <label>Description
                <br />
                <textarea
                  placeholder="Describe your slap"
                />
              </label>
            </div>
          </div> 

          <div className="upload-form-submit-btns">
            <button onClick={this.handleCancel}>Cancel</button>
            <button type="submit">Save</button>
          </div>
            
        </form>

      </div>
    )
  }
}

export default UploadForm;