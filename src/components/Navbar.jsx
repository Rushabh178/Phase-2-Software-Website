import React from "react";
import Tabs from "./Tabs";
function Navbar(){
    return <nav className=" navbar navbar-expand-md fixed-top shadow-sm header">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://rushabh178.github.io/Phase-2-Software-Website/">Nexus</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse tabs" id="navbarNavAltMarkup">
      <div className=" navbar-nav">
        <Tabs heading="Homes" link = "#header"/>
        <Tabs heading="Services" link="#services"/>
        <Tabs heading="About" link="#about"/>
        <Tabs heading="Contacts" link="#footer"/>
      </div>
    </div>
  </div>
</nav>
}


export default Navbar;
