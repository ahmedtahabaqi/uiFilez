import React from "react";
import Context from "./context.js";
import {
  Avatar,
  Pane,
  Dialog,
  Button,
  Select,
  Table,
  IconButton
} from "evergreen-ui";
import Component from "@reactions/component";
import InfiniteCarousel from "react-leaf-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

let ViewContent = styled.div`
  color: #7e87a1;
  font-family: Roboto;
  z-index: 9;
  background-color: #ffff;
  height: 130px;
  width: 78%;
  position: absolute;
  margin-left: 250px;
  margin-top: 180px;
`;

class MyFiles extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <header className="header">
                <div className="divSearch">
                  <img
                    className="imgSearch"
                    src={require("../assets/search.png")}
                    alt=""
                  />
                  <input type="text" placeholder="Search on FileZ" />
                </div>
                <div className="chooseplane">
                  <Component initialState={{ isShown: false }}>
                    {({ state, setState }) => (
                      <Pane>
                        <Dialog
                          isShown={state.isShown}
                          onCloseComplete={() => setState({ isShown: false })}
                          hasFooter={false}
                          hasHeader={false}
                        >
                          Completely custom dialog
                        </Dialog>

                        <Button
                          marginRight={16}
                          width={120}
                          height={30}
                          appearance="minimal"
                          iconBefore="trending-up"
                          onClick={() => setState({ isShown: true })}
                        >
                          choose Plane
                        </Button>
                      </Pane>
                    )}
                  </Component>
                </div>
                <div className="userimg">
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/756196362576723968/6GUgJG4L_400x400.jpg"
                    name="Jeroen Ransijn"
                    size={40}
                  />
                </div>
              </header>
              {/*/////////////////////////////// */}
              <div className="viewFile">
                <Select width={240}>
                  <option value="All File" checked>
                    All File
                  </option>
                  <option value="image">image</option>
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="MP3">MP3</option>
                  <option value="Other">Other</option>
                </Select>
              </div>
              {/* /////////////////////////////// */}
              <ViewContent>
                <div className="foldersName">Folders</div>
                <div>
                  <InfiniteCarousel
                    breakpoints={[
                      {
                        breakpoint: 0
                      }
                    ]}
                    dots={false}
                    showSides={true}
                    sidesOpacity={1}
                    sideSize={0.01}
                    slidesToScroll={1}
                    slidesToShow={12}
                    scrollOnDevice={false}
                  >
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> image</span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Folder 1 </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> PDF </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Audio </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Video </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Movies </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Programs </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Other </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Folder 1 </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Folder 1 </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Folder 1 </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Folder 1 </span>
                    </div>
                    <div>
                      <img
                        alt=""
                        height="60px;"
                        src={require("../assets/folder.png")}
                      />
                      <span> Folder 1 </span>
                    </div>
                  </InfiniteCarousel>
                </div>
              </ViewContent>
              {/* /////////////////////////// */}
              <div className="table">
                <div className="Files">Files</div>
                <Table>
                  <Table.Head>
                    <Table.TextCell
                      flexBasis={65}
                      flexShrink={0}
                      flexGrow={0}
                    />
                    <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Uploaded At</Table.TextHeaderCell>
                    <Table.TextHeaderCell>File Size</Table.TextHeaderCell>
                    <Table.TextCell
                      flexBasis={110}
                      flexShrink={0}
                      flexGrow={0}
                    />
                  </Table.Head>
                  <Table.Body height={240}>
                    {ctx.value.map(item => (
                      <Table.Row
                        key={item.id}
                        isSelectable
                        onSelect={() => alert(item.name)}
                      >
                        <Table.TextCell
                          flexBasis={65}
                          flexShrink={0}
                          flexGrow={0}
                        >
                          <Avatar
                            name="Bill Gates"
                            size={40}
                            marginRight={16}
                          />
                        </Table.TextCell>
                        <Table.TextCell>{item.name}</Table.TextCell>
                        <Table.TextCell>{item.uploadedAt}</Table.TextCell>
                        <Table.TextCell>{item.fileSize}</Table.TextCell>
                        <Table.TextCell
                          flexBasis={55}
                          flexShrink={0}
                          flexGrow={0}
                        >
                          <IconButton icon="import" intent="success" />
                        </Table.TextCell>
                        <Table.TextCell
                          flexBasis={55}
                          flexShrink={0}
                          flexGrow={0}
                        >
                          <IconButton icon="trash" intent="danger" />
                        </Table.TextCell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default MyFiles;
