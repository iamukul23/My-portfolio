import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Services from "./components/Services/Services.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Photograohy from "./components/Photograohy/Photograohy.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Scrollup from "./components/Scrollup/Scrollup.jsx";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader ? (
        <LoadingScreen onFinish={() => setShowLoader(false)} />
      ) : (
        <>
          <CustomCursor />
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Reviews />
            <Portfolio />
            <Photograohy />
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </>
      )}
    </>
  );
}

export default App;
