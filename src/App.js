import React, { useEffect } from "react";
// import  from 'react-rout'
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
