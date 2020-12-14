// component created with help from a tutorial by Egor Egorov
// url: https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929

import React, { Component } from 'react';

class DragDrop extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      drag: false
    };
  }

  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({drag: true});
    }
  }

  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return;
    this.setState({drag: false});
  }

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({drag: false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  }

  componentDidMount() {
    this.dragCounter = 0;
  }

render() {
    return (
      <div
        className="upload-drag-modal"
        onDragOver={this.handleDrag}
        onDragEnter={this.handleDragIn}
        onDragLeave={this.handleDragOut}
        onDrop={this.handleDrop}
      >
        {this.state.drag &&
          <div className="upload-drag-screen">
            <div className="upload-drag-text">
              <div>Drop your files here.</div>
            </div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}

export default DragDrop;