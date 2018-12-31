import React, { Component } from "react";
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            {/* SIDEBAR GOES UNDER HERE */}
            <Sidebar />
            {/* END OF SIDEBAR */}
          </div>
          <div className="content col-10">
            {/* AUTHORLIST UNDER HERE */}
            <AuthorList authorsProp1={authors} />
            {/* END OF AUTHORLIST */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
