import React from "react";
import FeedbackButton from "./FeedbackButton";


const Footer = ({ onFeedbackButtonClick }) => {
    return (<div  className="container">
    <footer id="footer" className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#header" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-body-secondary">Services</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#header" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-body-secondary">Services</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#header" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-body-secondary">Services</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
  
        <div className="col-md-5 offset-md-1 mb-3">
            <h5>Feedback us your experience</h5>
            <p>To improve ourselves and give better services.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">

            <FeedbackButton onClick={onFeedbackButtonClick} />
                {/* {isfeedback?<FeedbackForm />:<button className="btn btn-primary" type="button" fdprocessedid="v4c8nk" onClick={()=>{
                  SetisFeedback(true); 
                }}>Give Feedback
              </button>} */}
              
             
            </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com/people/Page-Nexus/pfbid0FQKbMm7qwaisobRLKKC4qS9iRg2iuSXmmpsqdmWBxhJCjbfeoJt4XGEczjHB7jNJl/?sk=about"><img className="bi" width="28" height="28" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com/nexussoftware.in/"><img className="bi" width="28" height="28" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="https://www.linkedin.com/company/nexus-software-pvt-ltd/"><img className="bi" width="28" height="28" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a></li>
        </ul>
      </div>
    </footer>
    
  </div>);
}

export default Footer;