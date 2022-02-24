import React from 'react'
import Carousel from './Carousel'
import {Container, Row} from 'react-bootstrap'

export default function Gallery() {
    return(
        <section id="gallery">
            <Container>
                <h1 className="gallery_title">Gallery</h1>
                <Row className="readmore">
					<p>
						Crusty Demons Club is a collection of 10,000 unique NFTs, randomly generated from 278 hand-drawn attributes and 22 traits, living on the Ethereum blockchain.  Your Crusty Demons NFT gives you access to a world of perks, privileges and tangible utility include a lifetime of FREE tickets to all Crusty Demons live shows/events.
					</p>
				</Row>
				<Row style={{paddingBottom:'5vw'}}>
					<Carousel />
				</Row>
            </Container>    
        </section>
    )
}