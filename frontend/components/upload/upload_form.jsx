import React from 'react';
import { $CombinedState } from 'redux';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.file.name,
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
      title: this.state.name,
      description: e.target[2].value,
      audio: this.props.file,
      image: e.target[0].files[0],
      imageUrl: this.state.imageUrl
    };
    this.props.saveSlap(this.props.file, slap);
  }

  handleChange = e => {
    var reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file });
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null })
    }
  }

  loadImage() {
    if(this.state.imageUrl) {
      return (
        <img className="upload-slap-image" src={this.state.imageUrl}/>
      )
    } else {
      return (
        <div className="default-upload-image"/>
      )
    }
  }

  updateName = (e) => {
    this.setState({ name: e.currentTarget.value })
  }

  render() {
    const { name } = this.state;

    return (
      <div className="upload-form-container">
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <div className="upload-form-input-container">
            <div className="image-container">
              {this.loadImage()}
              <label className="input-upload-label">
                <div>Upload Image</div>
                <input
                  className="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="upload-form-slap-inputs">
              <label>Title
                <br />
                <input
                  type="text"
                  placeholder="Name your slap"
                  minLength="1"
                  value={name}
                  onChange={this.updateName}
                />
              </label>
              <label>Description
                <br />
                <textarea
                  placeholder="Describe your slap (optional)"
                />
              </label>

              <div className="upload-form-submit-btns">
                <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>
                <button className="save-btn" type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default UploadForm;