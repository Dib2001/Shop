import React from "react";
import { useState } from "react";

import Navbar from "./Navbar";
import Overlay from "./Overlay";
import Pageloader from "./Pageloader";
import Sidebar from "./Sidebar";

import "adminbsb-materialdesign/css/themes/all-themes.css"

export default function Main() {

    const[theme, setTheme] = useState("theme-red ls-closed")

    const onBarClick = () => {
        setTheme ("theme-red ls-closed overlay-open")
    }

    if (window.screen.width>1150){
        document.body.className = "theme-red";
    }
    else{
        document.body.className = theme;
    }

  return (
    <React.Fragment>
      <Pageloader />
      <Overlay />
      <Navbar onBarClick={onBarClick}/>
      <Sidebar />
    </React.Fragment>
  );
}
