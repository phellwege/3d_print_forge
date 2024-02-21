import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Home from './views/Home';
import UserProfile from './views/UserProfile';
import MarketPlace from './views/MarketPlace';
import Storefront from './views/Storefront';
import CreateStore from './views/CreateStore';
import Details from './views/Details';
import {ThemeProvider} from 'styled-components';
import './App.css';
import { UserProvider } from './context/UserContext';

function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <BrowserRouter>
      <StoreProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
        <React.Fragment>
          <Routes>
            <Route exact path="/UserProfile" element={<UserProfile />} />
            <Route exact path="/CreateStore" element={<CreateStore />} />
            <Route exact path="/MarketPlace" element={<MarketPlace />} />
            <Route exact path="/Storefront" element={<Storefront />} />
            <Route exact path="/Details" element={<Details />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </React.Fragment>
        </ThemeProvider>
      </UserProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
