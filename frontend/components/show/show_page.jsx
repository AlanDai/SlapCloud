import React from "react";

import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { createComment } from "../../util/comments_api_util";
import { createLike, deleteLike } from "../../util/like_api_util";

import PlayButtonContainer from "../music_player/play_button_container"
import CommentItem from "./comment_item";

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchSlap(this.props.match.params.slapId).then(action => {
      this.setState({
        slap: action.payload.slap,
        liked: this.props.currUser && action.payload.slap.likes[this.props.currUser.id]
      });
      if (!this.props.currSong) this.props.setCurrentSlap(action.payload.slap.id);
    })
  }

  inputForm = () => {
    return (
      <div id="input-body">
        <div id="comment-form">
          <input id="comment-form-input" type="text" placeholder="Write a comment" onKeyUp={this.handleKeyUp} />
        </div>
        {this.props.currUser && 
          this.state.liked ?
            <button className="unlike-button" onClick={this.handleUnlike}>
              <FontAwesomeIcon icon="heart" /> <span> Liked</span>
            </button> :
            <button className="like-button" onClick={this.handleLike}>
              <FontAwesomeIcon icon="heart" /> <span> Like</span>
            </button>
        }
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

  handleLike = (e) => {
    this.setState({ liked: true })
    createLike({
      liker_id: this.props.currUser.id,
      slap_id: this.state.slap.id
    }).then(like => {
      this.state.slap.likes[like.liker_id] = {id: like.id};
      this.setState({ slap: this.state.slap });
    })
  }

  handleUnlike = (e) => {
    this.setState({ liked: false })
    deleteLike(this.state.slap.likes[this.props.currUser.id].id)
    .then(like => {
      delete this.state.slap.likes[like.liker_id];
      this.setState({ slap: this.state.slap });
    })
  }

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
                <div>
                  <div><b>Description:</b></div>
                  <span>{slap.description}</span>
                </div>
                <span id="show-likes">
                  <FontAwesomeIcon icon="heart" /> {Object.values(slap.likes).length}
                </span>  
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