import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { search } from "../../util/search_api_util";
import SlapItemContainer from "../slaps/slap_item_container";
import UserItem from "./user_item";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "all",
      slaps: [],
      users: [],
    }
  }

  componentDidMount = () => {
    search(this.props.match.params.searchParams).then(({ slaps, users }) => {
      this.setState({ slaps, users })
      this.props.receiveSlaps(slaps);
    })
  }

  switchCategory = (category) => {
    this.setState({ category })
  }
  
  searchItems = () => {
    const { category, users, slaps } = this.state;
    const slapsArray = Object.values(slaps);

    if (category === "users") {
      return ( <div id="search-content">
          {users.length > 0 ?
            this.state.users.map((user, id) => <UserItem key={id} user={user} />) :
            <span>No users found!</span>
          }
        </div>
      )
    } else if (category === "slaps") {
      return ( <div id="search-content">
          {slapsArray.length > 0 ? 
            slapsArray.map((slap, id) => <SlapItemContainer key={id} slap={slap} />) :
            <span>No slaps found!</span>
          }
        </div>
      )
    } else {
      return ( <div id="search-content">
          {users.length > 0 &&
            this.state.users.slice(0, 3).map((user, id) => <UserItem key={id} user={user} />)
          }
          {slapsArray.length > 0 &&
            slapsArray.slice(0, 15).map((slap, id) => <SlapItemContainer key={id} slap={slap} />)
          }
          {users.length === 0 && slaps.length === 0 && <span>No matches found!</span>}
        </div>
      )
    }
  }

  render() {
    const { category } = this.state;

    return ( 
      <div id="search-page">
        <div id="search-header">
          <span>Search results for "{this.props.match.params.searchParams}"</span>
        </div>
        <div id="search-body">
          <div id="search-categories">
            { category === "all" ?
              <button id="all-category-button" className="selected-category" onClick={() => this.switchCategory('all')}>
                <FontAwesomeIcon icon="search"/><span>All</span>
              </button> :
              <button id="all-category-button" className="unselected-category" onClick={() => this.switchCategory('all')}>
                <FontAwesomeIcon icon="search"/><span>All</span>
              </button>
            }
            { category === "users" ?
              <button id="user-category-button" className="selected-category" onClick={() => this.switchCategory('users')}>
                <FontAwesomeIcon icon="user"/><span>Users</span>
              </button> :
              <button id="user-category-button" className="unselected-category" onClick={() => this.switchCategory('users')}>
                <FontAwesomeIcon icon="user"/><span>Users</span>
              </button>
            }
            { category === "slaps" ?
              <button id="slap-category-button" className="selected-category" onClick={() => this.switchCategory('slaps')}>
                <FontAwesomeIcon icon="hand-paper"/><span>Slaps</span>
              </button> :
              <button id="slap-category-button"  className="unselected-category" onClick={() => this.switchCategory('slaps')}>
                <FontAwesomeIcon icon="hand-paper"/><span>Slaps</span>
              </button>
            }
            
          </div>

          {this.searchItems()}
        </div>

      </div>
    )
  }
}

export default SearchPage;