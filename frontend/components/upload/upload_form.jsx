import React from 'react';

class UploadForm extends React.Component {
  handleCancel = () => {
    this.props.cancelUpload(this.props.file);
  }

  handleSubmit = e => {
    e.preventDefault();
    const slap = {
      title: e.target[0].value,
      description: e.target[1].value,
      file: this.props.file,
    }
    this.props.saveSlap(this.props.file, slap)
  }

  render() {
    const { file } = this.props;

    return (
      <div className="upload-form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name your slap"
            minLength="1"
          />
          <textarea
            placeholder="Describe your slap"
          />
          <button onClick={this.handleCancel}>Cancel</button>
          <button type="submit">Save</button>
        </form>

      </div>
    )
  }
}

export default UploadForm;