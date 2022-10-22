import React from "react";

export default function Sidebar() {
  return (
    <section>
      {/* Left Sidebar */}
      <aside id="leftsidebar" className="sidebar">
        {/* User Info */}
        <div className="user-info">
          <div className="image">
            <img src="images/user.png" width={48} height={48} alt="User" />
          </div>
          <div className="info-container">
            <div
              className="name"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              John Doe
            </div>
            <div className="email">john.doe@example.com</div>
            <div className="btn-group user-helper-dropdown">
              <i
                className="material-icons"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                keyboard_arrow_down
              </i>
              <ul className="dropdown-menu pull-right">
                <li>
                  <a
                    href="javascript:void(0);"
                    className=" waves-effect waves-block"
                  >
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a
                    href="javascript:void(0);"
                    className=" waves-effect waves-block"
                  >
                    <i className="material-icons">shopping_cart</i>Sales
                  </a>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a
                    href="javascript:void(0);"
                    className=" waves-effect waves-block"
                  >
                    <i className="material-icons">input</i>Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* #User Info */}
        {/* Menu */}
        <div className="menu">
          <div
            className="slimScrollDiv"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "auto",
              height: 395,
            }}
          >
            <ul
              className="list"
              style={{ overflow: "hidden", width: "auto", height: 395 }}
            >
              <li className="header">MAIN NAVIGATION</li>
              <li className="active">
                <a
                  href="index.html"
                  className="toggled waves-effect waves-block"
                >
                  <i className="material-icons">home</i>
                  <span>Home</span>
                </a>
              </li>
            </ul>
            <div
              className="slimScrollBar"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                width: 4,
                position: "absolute",
                top: 0,
                opacity: "0.4",
                display: "none",
                borderRadius: 0,
                zIndex: 99,
                right: 1,
                height: 395,
              }}
            />
            <div
              className="slimScrollRail"
              style={{
                width: 4,
                height: "100%",
                position: "absolute",
                top: 0,
                display: "none",
                borderRadius: 0,
                background: "rgb(51, 51, 51)",
                opacity: "0.2",
                zIndex: 90,
                right: 1,
              }}
            />
          </div>
        </div>
        {/* #Menu */}
        {/* Footer */}
        <div className="legal">
          <div className="copyright">
            © 2016 - 2017{" "}
            <a href="javascript:void(0);">AdminBSB - Material Design</a>.
          </div>
          <div className="version">
            <b>Version: </b> 1.0.5
          </div>
        </div>
        {/* #Footer */}
      </aside>
      {/* #END# Left Sidebar */}
      {/* Right Sidebar */}
      <aside id="rightsidebar" className="right-sidebar">
        <ul className="nav nav-tabs tab-nav-right" role="tablist">
          <li role="presentation" className="active">
            <a href="#skins" data-toggle="tab">
              SKINS
            </a>
          </li>
          <li role="presentation">
            <a href="#settings" data-toggle="tab">
              SETTINGS
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            className="tab-pane fade in active in active"
            id="skins"
          >
            <div
              className="slimScrollDiv"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: 563,
              }}
            >
              <ul
                className="demo-choose-skin"
                style={{ overflow: "hidden", width: "auto", height: 563 }}
              >
                <li data-theme="red" className="active">
                  <div className="red" />
                  <span>Red</span>
                </li>
                <li data-theme="pink">
                  <div className="pink" />
                  <span>Pink</span>
                </li>
                <li data-theme="purple">
                  <div className="purple" />
                  <span>Purple</span>
                </li>
                <li data-theme="deep-purple">
                  <div className="deep-purple" />
                  <span>Deep Purple</span>
                </li>
                <li data-theme="indigo">
                  <div className="indigo" />
                  <span>Indigo</span>
                </li>
                <li data-theme="blue">
                  <div className="blue" />
                  <span>Blue</span>
                </li>
                <li data-theme="light-blue">
                  <div className="light-blue" />
                  <span>Light Blue</span>
                </li>
                <li data-theme="cyan">
                  <div className="cyan" />
                  <span>Cyan</span>
                </li>
                <li data-theme="teal">
                  <div className="teal" />
                  <span>Teal</span>
                </li>
                <li data-theme="green">
                  <div className="green" />
                  <span>Green</span>
                </li>
                <li data-theme="light-green">
                  <div className="light-green" />
                  <span>Light Green</span>
                </li>
                <li data-theme="lime">
                  <div className="lime" />
                  <span>Lime</span>
                </li>
                <li data-theme="yellow">
                  <div className="yellow" />
                  <span>Yellow</span>
                </li>
                <li data-theme="amber">
                  <div className="amber" />
                  <span>Amber</span>
                </li>
                <li data-theme="orange">
                  <div className="orange" />
                  <span>Orange</span>
                </li>
                <li data-theme="deep-orange">
                  <div className="deep-orange" />
                  <span>Deep Orange</span>
                </li>
                <li data-theme="brown">
                  <div className="brown" />
                  <span>Brown</span>
                </li>
                <li data-theme="grey">
                  <div className="grey" />
                  <span>Grey</span>
                </li>
                <li data-theme="blue-grey">
                  <div className="blue-grey" />
                  <span>Blue Grey</span>
                </li>
                <li data-theme="black">
                  <div className="black" />
                  <span>Black</span>
                </li>
              </ul>
              <div
                className="slimScrollBar"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  width: 6,
                  position: "absolute",
                  top: 0,
                  opacity: "0.4",
                  display: "block",
                  borderRadius: 0,
                  zIndex: 99,
                  right: 1,
                  height: "352.188px",
                }}
              />
              <div
                className="slimScrollRail"
                style={{
                  width: 6,
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  display: "none",
                  borderRadius: 0,
                  background: "rgb(51, 51, 51)",
                  opacity: "0.2",
                  zIndex: 90,
                  right: 1,
                }}
              />
            </div>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="settings">
            <div
              className="slimScrollDiv"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: 563,
              }}
            >
              <div
                className="demo-settings"
                style={{ overflow: "hidden", width: "auto", height: 563 }}
              >
                <p>GENERAL SETTINGS</p>
                <ul className="setting-list">
                  <li>
                    <span>Report Panel Usage</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" defaultChecked="" />
                        <span className="lever" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Email Redirect</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever" />
                      </label>
                    </div>
                  </li>
                </ul>
                <p>SYSTEM SETTINGS</p>
                <ul className="setting-list">
                  <li>
                    <span>Notifications</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" defaultChecked="" />
                        <span className="lever" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Auto Updates</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" defaultChecked="" />
                        <span className="lever" />
                      </label>
                    </div>
                  </li>
                </ul>
                <p>ACCOUNT SETTINGS</p>
                <ul className="setting-list">
                  <li>
                    <span>Offline</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Location Permission</span>
                    <div className="switch">
                      <label>
                        <input type="checkbox" defaultChecked="" />
                        <span className="lever" />
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="slimScrollBar"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  width: 6,
                  position: "absolute",
                  top: 0,
                  opacity: "0.4",
                  display: "block",
                  borderRadius: 0,
                  zIndex: 99,
                  right: 1,
                }}
              />
              <div
                className="slimScrollRail"
                style={{
                  width: 6,
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  display: "none",
                  borderRadius: 0,
                  background: "rgb(51, 51, 51)",
                  opacity: "0.2",
                  zIndex: 90,
                  right: 1,
                }}
              />
            </div>
          </div>
        </div>
      </aside>
      {/* #END# Right Sidebar */}
    </section>
  );
}
