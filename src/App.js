import React, { Component } from "react";
import Context from "./component/context.js";

import Show from "./component/show.js";
import Trash from "./component/trash";
import MyFiles from "./component/myFile";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: [
        { id: 1, name: "image.jpg", uploadedAt: "7/1/2019", fileSize: "3.4MB" },
        { id: 2, name: "vsco.pdf", uploadedAt: "7/1/2019", fileSize: "1.1MB" },
        { id: 3, name: "oscar.png", uploadedAt: "7/1/2019", fileSize: "1.4MB" },
        { id: 4, name: "hoho.mp3", uploadedAt: "7/1/2019", fileSize: "3.2MB" },
        { id: 5, name: "echo.mkv", uploadedAt: "7/1/2019", fileSize: "2.6MB" },
        { id: 6, name: "pic.jpg", uploadedAt: "7/1/2019", fileSize: "1.5MB" },
        { id: 7, name: "tran.jpg", uploadedAt: "7/1/2019", fileSize: "3.4MB" }
      ]
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Context.Provider value={{ value: this.state.profile }}>
          <Show />
          <Route exact path="/" component={MyFiles} />
          <Route exact path="/Trash" component={Trash} />
        </Context.Provider>
      </BrowserRouter>
    );
  }
}
export default App;
