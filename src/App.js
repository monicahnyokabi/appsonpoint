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
      <About />
      <Team />
      <Contact />
    </ThemeProvider>
  );
}

export default App;