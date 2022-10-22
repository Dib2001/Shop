import React from "react";
import { Link } from "react-router-dom";

import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/css/style.css";

export default function Register() {
  document.body.className = "signup-page";
  return (
    <div className="signup-box">
      <div className="logo">
        <a href="javascript:void(0);">
          Admin<b>BSB</b>
        </a>
        <small>Admin BootStrap Based - Material Design</small>
      </div>
      <div className="card">
        <div className="body">
          {/* <form id="sign_up" method="POST"> */}
          <form>
            <div className="msg">Register a new membership</div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="material-icons">person</i>
              </span>
              <div className="form-line">
                <input
                  type="text"
                  className="form-control"
                  name="namesurname"
                  placeholder="Name Surname"
                  required=""
                  autofocus=""
                />
              </div>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="material-icons">email</i>
              </span>
              <div className="form-line">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="material-icons">lock</i>
              </span>
              <div className="form-line">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  minLength={6}
                  placeholder="Password"
                  required=""
                />
              </div>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="material-icons">lock</i>
              </span>
              <div className="form-line">
                <input
                  type="password"
                  className="form-control"
                  name="confirm"
                  minLength={6}
                  placeholder="Confirm Password"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="filled-in chk-col-pink"
              />
              <label htmlFor="terms">
                I read and agree to the{" "}
                <a href="javascript:void(0);">terms of usage</a>.
              </label>
            </div>
            <button
              className="btn btn-block btn-lg bg-pink waves-effect"
              type="submit"
            >
              SIGN UP
            </button>
            <div className="m-t-25 m-b--5 align-center">
              <Link to="/">You already have a membership?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
