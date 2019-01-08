import React from "react";
import Context from "./context.js";
import { Popover, Position, Menu, Button } from "evergreen-ui";
import { NavLink } from "react-router-dom";

const Show = () => {
  return (
    <Context.Consumer>
      {ctx => {
        return (
          <React.Fragment>
            <div className="main">
              <div className="leftcomponent">
                <div className="logo">
                  <img src={require("../assets/cloud.png")} alt="" />
                  <p>FileZ</p>
                </div>
                <div className="btnAdd">
                  <Popover
                    position={Position.BOTTOM_LEFT}
                    content={
                      <Menu>
                        <Menu.Group>
                          <Menu.Item icon="folder-open">Folder</Menu.Item>
                          <Menu.Divider />
                          <Menu.Item icon="document">File</Menu.Item>
                        </Menu.Group>
                      </Menu>
                    }
                  >
                    <Button
                      marginRight={16}
                      width={110}
                      height={30}
                      appearance="minimal"
                      iconBefore="plus"
                    >
                      Add New
                    </Button>
                  </Popover>
                </div>
                <div className="myfile">
                  <NavLink className="myfile" exact to="/">
                    <img src={require("../assets/myfile.png")} alt="" />
                    <a href="#1">My File</a>
                  </NavLink>
                </div>

                <div className="bin">
                  <NavLink className="bin" to="/Trash">
                    <img src={require("../assets/bin.png")} alt="" />
                    <a href="#2">Trash</a>
                  </NavLink>
                </div>
                <div className="sorage">
                  <div className="storimg">
                    <img src={require("../assets/storage.png")} alt="" />
                    <p>Storage</p>
                  </div>
                  <div className="szlider">
                    <div className="szliderbar" />
                  </div>
                  <div className="storparg">
                    <p>50 MB of 100 MB used</p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </Context.Consumer>
  );
};

export default Show;
