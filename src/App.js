import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import Services from "./components/services/index.js";
import Work from "./components/work/index.js";

const Body = styled.div`
  ${'' /* background-color: ${({ theme }) => theme.bg}; */}

  width: 100%;
  overflow-x: hidden;

`;

const Wrapper = styled.div`
  background: rgb(47,22,31);
background: linear-gradient(94deg, rgba(47,22,31,1) 13%, rgba(10,11,22,1) 23%, rgba(14,14,34,1) 53%, rgba(29,23,23,1) 86%);
${'' /* background: rgb(4,4,5);
background: linear-gradient(90deg, rgba(4,4,5,1) 10%, rgba(10,11,22,1) 23%, rgba(14,14,34,1) 56%, rgba(3,2,2,1) 87%); */}
  width: 100%;
  ${'' /* clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%); */}
`;
function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
      <Wrapper>
      <Navbar />
        <Body>
          <HeroSection />
          {/* <Wrapper> */}
            <Services />
            <Work />
          {/* </Wrapper> */}
          {/* <Wrapper> */}
            {/* <Experience /> */}
            <Skills />
          {/* </Wrapper> */}
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          {/* <Wrapper> */}
            <Contact />
          {/* </Wrapper> */}
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Wrapper>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
