import React from "react";
import ServicesCard from "./ServiceCard";
import Border from './Border';
import servicesDatas from "../serviceInfo";
function Services() {
    return (<section id ="services">
        <div className="container-md text-center feature-padding">
            
            <h2 className="display-4 fw-bold lh-1 text-body-emphasis">Our Services</h2>
            <div className="container">
        <Border/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 feature-padding">
      {servicesDatas.map(servicesData => <ServicesCard 
        key = {servicesData.id}
        img = {servicesData.img}
        title = {servicesData.title}
        text = {servicesData.description}
      />)}
        
      </div>
    </div>
        </div>
    </section>);
    
    
}

export default Services;