import React from "react";

function About(){
    return (<section id ="about">
  <div className="container py-4">
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="col-md-8 fs-4">Welcome to Nexus Software, where innovation meets expertise. Established in 2010, Nexus is a forward-thinking software development company dedicated to delivering cutting-edge solutions that transform businesses and elevate user experiences.</p>
        <p className="col-md-8 fs-4">Explore the possibilities with Nexus Software and let's turn your vision into reality. Together, we'll shape the future through technology.</p>
        <a href='tel:+918778993293'><button className="btn btn-primary btn-lg" type="button">Contact Us</button></a>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Innovative Solutions through Collaborative Expertise</h2>
          <p>Our team of highly skilled developers, engineers, and creative minds collaborate to craft tailor-made software applications, mobile apps, and intelligent solutions using the latest technologies such as Artificial Intelligence and Machine Learning. We strive to solve complex challenges and empower our clients with the tools they need to thrive in the digital landscape.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Elevating Success: Your Trusted Partner in Digital Transformation</h2>
          <p>At Nexus, we prioritize quality, transparency, and client satisfaction. Our commitment to excellence has earned us a reputation for reliability and innovation. Whether you're a startup looking to make your mark or an established enterprise seeking digital transformation, Nexus Software is your trusted partner for success.</p>
        </div>
      </div>
    </div>

  </div>
</section>);
}
export default About;