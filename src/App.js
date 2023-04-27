import  { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider, createTheme, colors } from "@mui/material";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, theme } from "./GlobalStyle";
import About from "./components/about/about.component";
import Practice from "./components/practice/practice";
import SinglePage from "./pages/SinglePage";
import ScrollTop from "./components/scroll-top/scroll-top.component";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import StepperPage from "./pages/StepperPage";

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: colors.teal[500],
    }
  }
})

function App() {
  return (

    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={MuiTheme}>
      <Router>
        <GlobalStyle />
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productdetails/:id/:title" element={<SinglePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ordersuccess" element={<StepperPage />} />
        </Routes>
      </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
