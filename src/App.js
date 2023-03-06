import styled, { ThemeProvider } from "styled-components";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, theme } from "./GlobalStyle";
import About from "./components/about/about.component";
import Header from "./components/header/header.component";
import Announcement from "./components/announcement/announcement.component";
import Cart from "./components/cart/cart.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
