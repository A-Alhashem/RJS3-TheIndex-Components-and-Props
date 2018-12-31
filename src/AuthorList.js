import React, { Component } from "react";

// Component
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorCards1 = this.props.authorsProp1.map(author => (
      <AuthorCard key={author.last_name} authorProp2={author} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
          {/* AuthorCard goes under here */}
          {authorCards1}
          {/* End of AuthorCard */}
        </div>
      </div>
    );
  }
}

export default AuthorList;
