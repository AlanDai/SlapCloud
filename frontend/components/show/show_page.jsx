import React from "react";

import moment from "moment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateSlapImage, deleteSlap } from "../../util/slap_api_util";
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
        slap_image: action.payload.slap.image,
        liked: this.props.currUser &&
                action.payload.slap.likes &&
                action.payload.slap.likes[this.props.currUser.id]
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
        <input
          id="show-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={this.handleImageChange}
        />
        { this.state.liked ?
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

  handleUpload = (e) => {
    e.preventDefault(e);
    const su = document.getElementById("show-upload");
    su.click();
  }

  handleImageChange = (e) => {
    const formData = new FormData();
    formData.append('slap[image_file]', e.currentTarget.files[0]);  
    updateSlapImage(this.state.slap.id, formData)
      .then(({ image }) => this.setState({ slap_image: image }));
  }

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      
      const comment = {
        body: e.target.value,
        commenter_id: this.props.currUser.id,
        slap_id: this.state.slap.id,
      }
      createComment(comment)
      .then(comment => { 
        e.target.value = '';
        const slap = this.state.slap
        slap.comments ?
          slap["comments"][comment.id] = comment:
          slap["comments"] = { [comment.id] : comment } 
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
      this.state.slap.likes ? 
        this.state.slap.likes[like.liker_id] = {id: like.id} :
        this.state.slap.likes = { [like.liker_id] : {id: like.id} }        
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

    const { slap, slap_image } = this.state;
    const { currUser } = this.props;

    return (
      <div id="show-page">
        <div id="show-header">

          <div id="show-header-content">
            <PlayButtonContainer slap={slap} />
            <div id="show-header-info">
              <Link to={`/user/${slap.uploader.id}`}><span>{slap.uploader.email}</span></Link>
              <Link to={`/slap/${slap.id}`}><span>{slap.name}</span></Link>
            </div>
            <div id="show-header-info-2">
              <span>{moment(slap.uploader.created_at).fromNow()}</span>
              {/* {currUser.id === slap.uploader.id &&
                <button>
                  <span><FontAwesomeIcon icon="edit"/> Edit</span>
                </button>
              } */}
            </div>
          </div>

          <div id="show-header-image">
            {slap_image ?
              <img src={slap_image} /> :
              <div />
            }
            {currUser &&
              <button id="show-upload-button" onClick={this.handleUpload}>Upload Image</button>
            }
          </div>
          
        </div>
        <div id="show-body">
          {currUser && this.inputForm()}
          
          <div id="show-body-content">
            <div id="show-user-info">
              {slap.profile_image ?
                <img className="user-image-medallion" src={slap.profile_image} /> :
                <div className="default-user-medallion"/>}
              <Link to={`/user/${slap.uploader.id}`}><span>{slap.uploader.email}</span></Link>
              {/* <button>
                <FontAwesomeIcon icon="user" />
                <span> Follow</span>
              </button> */}
            </div>
            <div id="show-slap-content">
              <div id="show-description">
                <div>
                  <div><b>Description:</b></div>
                  <span>{slap.description}</span>
                </div>
                <span id="show-likes">
                  <FontAwesomeIcon icon="heart" /> { slap.likes ? Object.values(slap.likes).length : 0 }
                </span>  
              </div>
              <div id="show-comments">
                <div id="show-comments-header">
                  <FontAwesomeIcon icon="comment-alt" />
                  <span> {slap.comments ? Object.keys(slap.comments).length : 0 } comments </span>
                </div>
                <div>
                  {slap.comments && Object.values(slap.comments).map((comment, idx) =>
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