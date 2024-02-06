import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Border from "./Border";
import Services from "./Service";
import About from "./About";
import Footer from "./Footer";
import FeedbackForm from "./FeedbackForm";
const App = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const openPopup = () => {
      setIsFormVisible(true);

    };
  
    const closePopup = () => {
      setIsFormVisible(false);
    };
    return <div>
        <Navbar/>
        <Border/>
        <Header/>
        <Border/>
        <Services/>
        <About/>
        <Border/>
        {isFormVisible && <FeedbackForm onClose={closePopup} />}
        {/* <FeedbackForm/> */}
      <Footer onFeedbackButtonClick={openPopup} />
    </div>
}

export default App;