import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import { updateComment, deleteComment } from '../../util/comments_api_util';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
      editing: false,
    }
  }

  editField = () => (
    <div className="comment-content">
      <Link to={`/user/${this.state.comment.commenter_id}`}>{this.state.comment.email}</Link >
      {this.state.editing ?
        <input
          type="text"
          className="comment-edit-input"
          defaultValue={this.state.comment.body}
          autoFocus
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleEdit}
        /> :
        <div> {this.state.comment.body} </div>}
    </div>
  )

  handleChange = (e) => {
    const comment = this.state.comment;
    comment["body"] = e.target.value
    this.setState({ comment });
  }

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      updateComment(this.state.comment.id, { "body": e.target.value })
        .then(comment => this.setState({ comment, editing: false }))
    }
  }

  handleEdit = (e) => {
    if (this.state.editing) {
      this.setState({ editing: false })
    } else {
      this.setState({ editing: true })
    } 
  }

  handleDelete = (e) => {
    deleteComment(this.props.comment.id).then(comment => this.setState({ comment: null }))
  }

  render () {
    const { comment, editing } = this.state;
    const { user } = this.props;

    if (!comment) return <div></div>;

    return (
      <div className="comment" >
        <div className="comment-image">
        </div>

        {this.editField()}

        <div className="comment-tools">
          <div>{moment(comment.updated_at).fromNow()}</div>
          {user && user.id === comment.commenter_id &&
            <div className="comment-buttons">
              {!editing && 
                <button onClick={this.handleEdit}><FontAwesomeIcon icon="edit" /></button>
              }
              <button onClick={this.handleDelete}><FontAwesomeIcon icon="trash" /></button>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default CommentItem;