import React from 'react';
import NavBar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Footer from "./components/footer"
import './App.css';
import "./images/BrandonPic.PNG";


function App() {

  return (
    <div className="body">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
