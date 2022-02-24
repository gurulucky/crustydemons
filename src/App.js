import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import All from './components/All'
import Term from './components/Term';
import Privacy from './components/Privacy';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route path="term" element={<Term />} />
          <Route path="privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
