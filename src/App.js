import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Themes";
import { GlobalStyles } from "./components/styles/Global";
import GlobalContext from "./context/GlobalContext"
import Index from "./pages/index";
import Country from "./pages/country";
import "./fonts/icons/font-awesome.min.css"

const App = () => {
  const [theme, setTheme] = useState("lightTheme");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        < GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:countryId" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext.Provider >
  );
};
export default App;