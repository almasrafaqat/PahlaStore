import  { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, theme } from "./GlobalStyle";
import About from "./components/about/about.component";
import Cart from "./components/cart/cart.component";
import Practice from "./components/practice/practice";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
