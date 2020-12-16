import React from "react";

class SavedUploadItem extends React.Component {
  loadImage(item) {
    if(item.imageUrl){
      return (<img className="saved-item-image" src={item.imageUrl} />)
    } else {
      return (<div className="default-upload-image" />)
    }
  }

  render() {
    const { item } = this.props
    return (
      <div className="saved-upload-item">
        <div className="saved-image-container">
          {this.loadImage(item)}
        </div>
        <div className="saved-slap-info">
          <p>{`Title: ${item.title}`}</p>
          <p>{`Description: ${item.description}`}</p>
        </div>
      </div>
    )
  }
}

export default SavedUploadItem