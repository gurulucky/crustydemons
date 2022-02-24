import React from 'react'
import Navbar from './Navbar'
import Mint from './Mint'
import Gallery from './Gallery'
import Utility from './Utility'
import Key from './Key'
import Meet from './Meet.js'
import Roadmap from './Roadmap.js'
import Faq from './Faq.js'
import Subscribe from './Subscribe.js'
import Footer from './Footer.js'
import { ToastContainer } from 'react-toastify';


import '../App.css'

function All() {
  return (
    <>
      <Navbar />
      <Mint />
      <Key />
      <Utility />
      <Gallery />
      <Meet />
      <Roadmap />
      <Faq />
      <Subscribe />
      <Footer />
      <ToastContainer
        theme="colored"
      />
    </>
  );
}

export default All;
