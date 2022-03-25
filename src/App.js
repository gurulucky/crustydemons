import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import All from './components/All'
import Term from './components/Term';
import Privacy from './components/Privacy';
import Test from './components/Test'
import Collection from './components/Collection'
import Giveaway from './components/Giveaway'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route path="/term" element={<Term />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/:id" element={<Test />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/admin' element={<Giveaway />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
