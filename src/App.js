import React from "react";
import Header from "./header";
import Hero from "./hero"
import Services from "./services";
import About from "./about";
import Team from "./team";
import Contact from "./contact";

import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <Header />
      <Hero />
      <Services />
      <div class="d-flex justify-content-center mt-5 mb-3">
        <h3 class="rcorners3 text-white text-center">About</h3>
      </div>
      <About />
      <div class="d-flex justify-content-center  mt-5 mb-3 ">
        <h3 class="rcorners3 text-white text-center">Team</h3>
      </div>
      <Team />

      <div class="d-flex justify-content-center mt-5 mb-3">
        <h3 class="rcorners3 text-white text-center">Contact</h3>
      </div>
      <Contact />


    </ThemeProvider>
  );
}

export default App;