import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import UserProfile from './views/UserProfile';
import MarketPlace from './views/MarketPlace';
import AboutMe from './views/AboutMe';
import Storefront from './views/Storefront';

import {ThemeProvider} from 'styled-components';
import './App.css';

function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <Routes>
          <Route exact path="/UserProfile" element={<UserProfile />} />
          <Route exact path="/MarketPlace" element={<MarketPlace />} />
          <Route exact path="/AboutMe" element={<AboutMe />} />
          <Route exact path="/Storefront" element={<Storefront />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
