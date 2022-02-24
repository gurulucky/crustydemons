import React from 'react'
import {
  Container, Navbar, Nav, Image
} from 'react-bootstrap';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa";

import banner from '../assets/images/logo.png'

export default function NavBar() {
  return (
    <section id="navbar_top">
      <Navbar expand="lg" style={{justifyContent:"center"}}>
        <Container style={{margin:"0px"}}>
          <Navbar.Brand href="#mint" className="nav_logo">
            <Image src={banner} className="logo-png"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav_menubar">
              <Nav.Link href="#mint">MINT</Nav.Link>
              <Nav.Link href="#key">KEY INFO</Nav.Link>
              <Nav.Link href="#utility">UTILITY</Nav.Link>
              <Nav.Link href="#gallery">GALLERY</Nav.Link>
              <Nav.Link href="#meet">TEAM</Nav.Link>
              <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav className="nav_menubar_social">
              <p className="top_socialicon">
                <Nav.Link href="http://www.facebook.com/crustydemons" target="_blank"><FaFacebookF /></Nav.Link>
                <Nav.Link href="http://www.instagram.com/crustysofficial" target="_blank"><FaInstagram/></Nav.Link> 
                <Nav.Link href="http://www.youtube.com/channel/UCI01qaaJwf1dCqOsL51DBfQ" target="_blank"><FaYoutube /></Nav.Link>
                <Nav.Link href="http://www.tiktok.com/@crustydemonsofficial" target="_blank"><FaTiktok /></Nav.Link>
				<Nav.Link href="https://discord.gg/7KuhnzDWvm" target="_blank"><FaDiscord /></Nav.Link>
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  )
}
