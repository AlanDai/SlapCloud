import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { search } from "../../util/search_api_util";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "all"
    }
  }

  componentDidMount = () => {
    search(this.props.match.params.searchParams).then(({ slaps, users }) => {
      this.setState({ slaps, users })
    })

    const { category } = this.state;
    let ele;

    if (category === "users") {
      ele = document.getElementById("user-category-button")
    } else if (category === "slaps") {
      ele = document.getElementById("slap-category-button")
    } else {
      ele = document.getElementById("all-category-button")
    }

    ele.style.backgroundColor = "#FF4500";
    ele.style.color = "white";
  }

  searchItems = () => {
    const { category } = this.state;

    if (category === "users") {
      return <div id="search-content">User</div>
    } else if (category === "slaps") {
      return <div id="search-content">Slaps</div>
    } else {
      return <div id="search-content">All</div>
    }
  }

  render() {
    return ( 
      <div id="search-page">
        <div id="search-header">
          <span>Search results for "{this.props.match.params.searchParams}"</span>
        </div>
        <div id="search-body">
          <div id="search-categories">
            <button id="all-category-button">
              <FontAwesomeIcon icon="search"/><span>All</span>
            </button>
            <button id="user-category-button">
              <FontAwesomeIcon icon="user"/><span>Users</span>
            </button>
            <button id="slap-category-button">
              <FontAwesomeIcon icon="hand-paper"/><span>Slaps</span>
            </button>
          </div>

          {this.searchItems()}
        </div>

      </div>
    )
  }
}

export default SearchPage;