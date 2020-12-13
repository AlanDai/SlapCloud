// component created with help from a tutorial by Egor Egorov
// url: https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929

import Reaect, { Component } from 'react';

class DragDrop extends Component {
  state = {
    drag: false
  }

  dropRef = React.createRef();

  componentDidMount() {
    this.dragCounter = 0;
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
    let div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragLeave', this.handleDragOut);
    div.addEventListener('dragOver', this.handleDrag);
    div.addEventListener('drop', this.handleDrop)
  }

render() {
    return (
      <div
        className="upload-drag-modal"
        ref={this.dropRef}
      >
        {this.state.dragging &&
          <div 
            // style={{
            //   border: 'dashed grey 4px',
            //   backgroundColor: 'rgba(255,255,255,.8)',
            //   position: 'absolute',
            //   top: 0,
            //   bottom: 0,
            //   left: 0, 
            //   right: 0,
            //   zIndex: 9999
            // }}
            className="upload-drag-screen"
          >
            <div 
              className="upload-drag-text"
            >
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