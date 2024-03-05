import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import UserProfile from './views/UserProfile';
import MarketPlace from './views/MarketPlace';
import Storefront from './views/Storefront';
import CreateStore from './views/CreateStore';
import Details from './views/Details';
import {ThemeProvider} from 'styled-components';
import './App.css';
import { UserProvider } from './context/UserContext';
import { StoreProvider } from './context/StoreContext';
import { PrintsProvider } from './context/PrintsContext';
import Cart from './views/Cart';
import SetupUser from './views/SetupUser';


function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <BrowserRouter>
      <UserProvider>
      <StoreProvider>
      <PrintsProvider >
        <ThemeProvider theme={theme}>
        <React.Fragment>
          <Routes>
            <Route exact path="/UserProfile" element={<UserProfile />} />
            <Route exact path="/CreateStore" element={<CreateStore />} />
            <Route exact path="/SetupUser" element={<SetupUser />} />
            <Route exact path="/MarketPlace" element={<MarketPlace />} />
            <Route exact path="/Storefront" element={<Storefront />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/Details" element={<Details />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </React.Fragment>
        </ThemeProvider>
      </PrintsProvider>
      </StoreProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
