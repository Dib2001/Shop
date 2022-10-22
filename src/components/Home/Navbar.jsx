import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a
            href="javascript:void(0);"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
          />
          <a href="javascript:void(0);" className="bars" onClick={props.onBarClick}/>
          <a className="navbar-brand" href="index.html">
            ADMINBSB - MATERIAL DESIGN
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            {/* Notifications */}
            <li className="dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="true"
              >
                <i className="material-icons">notifications</i>
                <span className="label-count">7</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">NOTIFICATIONS</li>
                <li className="body">
                  <div
                    className="slimScrollDiv"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "auto",
                      height: 254,
                    }}
                  >
                    <ul
                      className="menu"
                      style={{ overflow: "hidden", width: "auto", height: 254 }}
                    >
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-light-green">
                            <i className="material-icons">person_add</i>
                          </div>
                          <div className="menu-info">
                            <h4>12 new members joined</h4>
                            <p>
                              <i className="material-icons">access_time</i> 14
                              mins ago
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-cyan">
                            <i className="material-icons">add_shopping_cart</i>
                          </div>
                          <div className="menu-info">
                            <h4>4 sales made</h4>
                            <p>
                              <i className="material-icons">access_time</i> 22
                              mins ago
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-red">
                            <i className="material-icons">delete_forever</i>
                          </div>
                          <div className="menu-info">
                            <h4>
                              <b>Nancy Doe</b> deleted account
                            </h4>
                            <p>
                              <i className="material-icons">access_time</i> 3
                              hours ago
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-orange">
                            <i className="material-icons">mode_edit</i>
                          </div>
                          <div className="menu-info">
                            <h4>
                              <b>Nancy</b> changed name
                            </h4>
                            <p>
                              <i className="material-icons">access_time</i> 2
                              hours ago
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-blue-grey">
                            <i className="material-icons">comment</i>
                          </div>
                          <div className="menu-info">
                            <h4>
                              <b>John</b> commented your post
                            </h4>
                            <p>
                              <i className="material-icons">access_time</i> 4
                              hours ago
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-light-green">
                            <i className="material-icons">cached</i>
                          </div>
                          <div className="menu-info">
                            <h4>
                              <b>John</b> updated status
                            </h4>
                            <p>
                              <i className="material-icons">access_time</i> 3
                              hours ago
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          <div className="icon-circle bg-purple">
                            <i className="material-icons">settings</i>
                          </div>
                          <div className="menu-info">
                            <h4>Settings updated</h4>
                            <p>
                              <i className="material-icons">access_time</i>{" "}
                              Yesterday
                            </p>
                          </div>
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
                        display: "block",
                        borderRadius: 0,
                        zIndex: 99,
                        right: 1,
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
                </li>
                <li className="footer">
                  <a
                    href="javascript:void(0);"
                    className=" waves-effect waves-block"
                  >
                    View All Notifications
                  </a>
                </li>
              </ul>
            </li>
            {/* #END# Notifications */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
