import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    }
  }

  handleCancel = () => {
    this.props.cancelUpload(this.props.file);
  }

  handleSubmit = e => {
    console.log(e);
  }

  render() {
    const { file } = this.props;

    return (
      <div className="upload-form-container">
        <form onSubmit={this.handSubmit}>
          <input
            type="text"
            placeholder="Name your slap"
          />
          <textarea
            placeholder="Describe your slap"
          />
          <button onClick={this.handleCancel}>Cancel</button>
          <button onClick={this.handleSave}>Save</button>

        </form>

      </div>
    )
  }
}

export default UploadForm;