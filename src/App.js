import React from 'react';

import Home from './components/index';
import Resume from './components/Resume';

import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core'

import './App.css';

function App() {
  return (
    <>
      <CssBaseline>
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </CssBaseline>
    </>
  );
}

export default App;
