import React from 'react'
import {Container} from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
  


export default function Footer() {
    return(
			<section id="footer">
				<Container>
					<p>
						<span><Link to="term">Terms</Link><Link to="privacy"> | Privacy Policy</Link></span>
						<span> COPYRIGHT © 2021 - CLUB VIRTUAL PTY LTD (ACN 653 514 231). ALL RIGHTS RESERVED.</span> 
						
					</p>
				</Container>
			</section>
    )
}