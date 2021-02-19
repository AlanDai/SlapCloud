import React from 'react';
import moment from 'moment';

import { NavLink, Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { showSlapLikes, createLike, deleteLike } from '../../util/like_api_util';
import PlayButtonContainer from '../music_player/play_button_container';

class SlapItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    showSlapLikes(this.props.slap.id).then(likes => this.setState({ likes }))
  }

  loadSlapImage = () => {
    if(!this.props.slap.image) {
      return <div className="default-slap-image" />
    } else {
      return <img className="slap-item-image" src={this.props.slap.image} />
    }
  }

  likeButton = () => {
    if (!this.state) return (<div></div>);

    const { likes } = this.state;

    if (!this.props.currUser) return (
      <div>
        <span>
          <FontAwesomeIcon icon="heart"/> {this.state ? Object.keys(this.state.likes).length : 0}
        </span>
      </div>
    )

    if (likes[this.props.currUser]) {
      return (
        <button onClick={this.handleLike} className="slap-item-like-button" style={{ color: "#FF4500" }}>
          <span>
            <FontAwesomeIcon icon="heart"/> {this.state ? Object.keys(this.state.likes).length : 0}
          </span>
        </button>
      )
    } else {
      return (
        <button onClick={this.handleLike} className="slap-item-like-button" style={{ color: "#e6e6e6" }}>
          <span>
            <FontAwesomeIcon icon="heart"/> {this.state ? Object.keys(this.state.likes).length : 0}
          </span>
        </button>
      ) 
    }
  }

  handleLike = (e) => {
    const { likes } = this.state;
    const { slap, currUser } = this.props;

    if (!likes[currUser]) {
      const like = {
        liker_id: currUser,
        slap_id: slap.id,
      }
      createLike(like).then(res => {
        const likes = this.state.likes;
        likes[currUser] = res;
        this.setState({ likes });
      });
    } else {
      deleteLike(likes[currUser].id).then(res => {
        const likes = this.state.likes;
        delete likes[res.liker_id];
        this.setState({ likes });
      });
    }

  }

  render () {
    const { slap } = this.props;

    return (
      <div className="slap-item">
        <NavLink to={`slap/${slap.id}`}>{this.loadSlapImage()}</NavLink>
        <PlayButtonContainer slap={slap}/>
        <div className="slap-item-info">  
          <Link to={`/user/${slap.uploader.id}`}><p className="slap-item-user">{slap.uploader.email}</p></Link>
          <Link to={`/slap/${slap.id}`}><p className="slap-item-title">{slap.name}</p></Link>
        </div>
        <div className="slap-item-right">
          <div className="slap-item-time">{moment(slap.created_at).fromNow()}</div>
          {this.likeButton()}
        </div>
      </div>
    )
  }
}

export default withRouter(SlapItem);