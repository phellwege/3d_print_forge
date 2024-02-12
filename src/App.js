import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';

import {ThemeProvider} from 'styled-components';
import './App.css';

function App() {
  const [theme, setTheme] = useState({mode: 'light'})
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
