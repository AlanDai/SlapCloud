import React from "react";

import { search } from "../../util/search_api_util";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "all"
    }
  }

  componentDidMount = () => {
    search(this.props.match.params.searchParams).then(res => console.log(res))
  }

  searchItems = () => {
    const { category } = this.state;

    if (category === "users") {
      return <div>User</div>
    } else if (category === "slaps") {
      return <div>Slaps</div>
    } else {
      return <div>All</div>
    }
  }

  render() {
    return ( 
      <div id="search-page">
        <div id="search-categories">
          <div>All</div>
          <div>Users</div>
          <div>Slaps</div>
        </div>

        {this.searchItems()}
      </div>
    )
  }
}

export default SearchPage;