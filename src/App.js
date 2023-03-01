import styled, { ThemeProvider } from "styled-components";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, theme } from "./GlobalStyle";
import About from "./components/about/about.component";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
