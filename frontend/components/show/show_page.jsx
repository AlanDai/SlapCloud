import React from "react";

import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { createComment, updateComment, deleteComment } from "../../util/comments_api_util";
import PlayButtonContainer from "../music_player/play_button_container"
import CommentItem from "./comment_item";

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchSlap(this.props.match.params.slapId).then(action => {
      this.setState({ slap: action.payload.slap });
      if (!this.props.currSong) this.props.setCurrentSlap(action.payload.slap.id);
    })
  }

  inputForm = () => {
    return (
      <div id="input-body">
        <div id="comment-form">
          <input id="comment-form-input" type="text" placeholder="Write a comment" onKeyUp={this.handleKeyUp} />
        </div>
        <button>
          <FontAwesomeIcon icon="heart" /> <span> Like</span>
        </button>
        {/* {this.likeButton()} */}
      </div>
    )
  }

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      
      const comment = {
        body: e.target.value,
        commenter_id: this.props.currUser.id,
        slap_id: this.state.slap.id,
      }
      createComment(comment).then(comment => { 
        e.target.value = '';
        const slap = this.state.slap
        slap["comments"][comment.id] = comment 
        this.setState({
          slap
        })
      });
    }
  }

  likeButton = () => {}

  render() {
    if (!this.state) return (<div></div>);

    const { slap } = this.state;
    const { currUser } = this.props;

    return (
      <div id="show-page">
        <div id="show-header">

          <div id="show-header-content">
            <PlayButtonContainer slap={slap} />
            <div id="show-header-info">
              <div><span>{slap.uploader.email}</span></div>
              <div><span>{slap.name}</span></div>
            </div>
            <div>
              <span>{moment(slap.uploader.created_at).fromNow()}</span>
            </div>
          </div>

          <div id="show-header-image">
            <img src={slap.image} />
          </div>
          
        </div>
        <div id="show-body">
          {currUser && this.inputForm()}
          
          <div id="show-body-content">
            <div id="show-user-info">
              {slap.uploader.image ?
                <img className="user-image-medallion" src={slap.uploader.image} /> :
                <div className="default-user-medallion"/>}
              <span>{slap.uploader.email}</span>
              <button>
                <FontAwesomeIcon icon="user" />
                <span> Follow</span>
              </button>
            </div>
            <div id="show-slap-content">
              <div id="show-description">
                <div><b>Description:</b></div>
                <span>{slap.description}</span>
              </div>
              <div id="show-comments">
                <div id="show-comments-header">
                  <FontAwesomeIcon icon="comment-alt" />
                  {slap.comments && 
                    <span> {Object.keys(slap.comments).length} comments</span>
                  }
                </div>
                <div>
                  {Object.values(slap.comments).map((comment, idx) =>
                    <CommentItem key={idx} user={currUser} comment={comment} />
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ShowPage;