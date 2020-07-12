import React from 'react';

import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core'

import './App.css';

function App() {
  return (
    <>
      <CssBaseline>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </CssBaseline>
    </>
  );
}

export default App;
