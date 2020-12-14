import React from "react";

const SavedUploadItem = ({ item }) => (
  <div className="saved-upload-item">
    <div className="slap-info">
      <p>{`Title: ${item.title}`}</p>
      <p>{`Description: ${item.description}`}</p>
    </div>
  </div>
)

export default SavedUploadItem