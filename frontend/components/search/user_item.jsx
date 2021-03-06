import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className="square-user-item">
      {user.profile_image ?
        <img className="square-user-profile" src={user.profile_image}/> :
        <div className="square-user-default" />
      }
      <div className="square-user-info">
        <Link to={`/user/${user.id}`} >{user.username ? user.username : user.email}</Link >
        {user.location && <div>{user.location}</div>}
      </div>
    </div>
  )
}

export default UserItem;