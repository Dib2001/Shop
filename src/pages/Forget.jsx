import React from 'react'
import { Link } from "react-router-dom";

import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/css/style.css";


export default function Forget() {
  document.body.className = "fp-page";
  return (
    <div className="fp-box">
  <div className="logo">
    <a href="javascript:void(0);">
      Admin<b>BSB</b>
    </a>
    <small>Admin BootStrap Based - Material Design</small>
  </div>
  <div className="card">
    <div className="body">
      <form id="forgot_password" method="POST">
        <div className="msg">
          Enter your email address that you used to register. We'll send you an
          email with your username and a link to reset your password.
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
              placeholder="Email"
              required=""
              autofocus=""
            />
          </div>
        </div>
        <button
          className="btn btn-block btn-lg bg-pink waves-effect"
          type="submit"
        >
          RESET MY PASSWORD
        </button>
        <div className="row m-t-20 m-b--5 align-center">
          <Link to="/">Sign In!</Link>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}
