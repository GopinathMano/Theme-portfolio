import { useState } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "./Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const App = () => {
  // Change the defualt theme below ("dark" or "light")
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <About theme={theme} setTheme={setTheme} />
      <main>
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer />
    </>
  );
};

export default App;
