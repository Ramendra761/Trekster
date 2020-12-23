import React,{useState,useEffect}from "react";
import tresk from "./Capture.PNG"
import "./nav.css"
// adding scroll bar listener

function Nav() {
    const[show,handleShow]=useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {//to add black color in the start
          handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);
  return (
    // <div className="nav">
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={tresk} alt="Treskster logo" />
      <img
        className="Nav_avator"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="text"
      />
    </div>
  );
}

export default Nav;
