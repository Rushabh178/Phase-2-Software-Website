import React from "react";

function Header(){
    return <div className="container my-5 " id="header">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-sm hero">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Welcome to Nexus Software</h1>
        <p className="lead">At Nexus Software, we are dedicated to empowering businesses through innovative software solutions. With a commitment to quality, transparency, and client satisfaction, we have earned a reputation for reliability and innovation. Whether you're a startup ready to make your mark or an established enterprise seeking digital transformation, Nexus Software is your trusted partner for success. Explore the possibilities with us and let's shape the future together.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <a href='tel:+918778993293'><button type="button" className="btn btn-success btn-lg px-4 me-md-2 fw-bold">Contact</button></a>
          <a href="mailto:info@hoolix.com"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Email</button></a>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-sm">
          <img className="rounded-lg-3" src="https://nexusinfo.in/assets/images/HD-Wallpaper.jpg" alt="nexus office" width="720"/>
      </div>
    </div>
  </div>
}


export default Header;


