import React from 'react'
import {Container, Row, Image} from 'react-bootstrap'
import roadmap1 from '../assets/images/1.png'
import roadmap2 from '../assets/images/2.png'
import roadmap3 from '../assets/images/3.png'
import roadmap4 from '../assets/images/4.png'
import roadmap5 from '../assets/images/5.png'

export default function Roadmap(){
    return(
        <section id="roadmap" style={{paddingTop:'150px'}}>
            <Container>
                <Row>
                    <div>
                        <h1 className='roadmap_title'>Road Map</h1>
                    </div>
                </Row>
                <Row>
                    <div className="roadmap_left">
                        <div className="roadmap_content-l">
                            <div className="roadmap_text">
                                <div>
                                    <h1>The Launch </h1>
                                    <br />
                                    <p>Demons Club NFTs will be available for minting.</p>
                                </div>
                            </div>
                            <div className="roadmap_img">
                                <Image src={roadmap1}  style={{width:'100%'}} />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="roadmap_right">
                        <div className="roadmap_content-r">
                            <div className="roadmap_img">
                                <Image src={roadmap2}  style={{width:'100%'}} />
                            </div>
                            <div className="roadmap_text">
                                <div>
                                    <h1>25% Demons Club Airdrop</h1>
                                    <br />
                                    <p>Exclusive for the first few NFT holders (randomly selected), Chief Demon will airdrop 50 free NFTs.</p>
                                    <br />
                                    <p>Demons Club utility commences.  Start enjoying the privileges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="roadmap_left">
                        <div className="roadmap_content-l">
                            <div className="roadmap_text">
                                <div>
                                    <h1>50% More Giveaways & Utility</h1>
                                    <br />
                                    <p>A further 50 Demons Club NFTs will be given away to existing NFT holders selected on a ramdon basis.</p>
                                    <br />
                                    <p>Demons Club game research will commence and development of initial specifications.</p>
                                    <br />
                                    <p>Pursue further utility expansion opportunities including partnership.</p>
                                </div>
                            </div>
                            <div className="roadmap_img">
                                <Image src={roadmap3}  style={{width:'100%'}} />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="roadmap_right">
                        <div className="roadmap_content-r">
                            <div className="roadmap_img">
                                <Image src={roadmap4}  style={{width:'100%'}} />
                            </div>
                            <div className="roadmap_text">
                                <div>
                                    <h1>75% Further Airdrop & Merch Dev</h1>
                                    <br />
                                    <p>A further 100 Demons Club NFTs will be given away to existing NFT holders selected on a ramdon basis.</p>
                                    <br />
                                    <p>Commence development of merchandise store and collection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="roadmap_left">
                        <div className="roadmap_content-l">
                            <div className="roadmap_text">
                                <div>
                                    <h1>100% Game Development Starts </h1>
                                    <br />
                                    <p>This is the new beginning.  </p>
                                    <br />
                                    <p>In another act of generosity, Chief Demon will give away a further 50 Demons Club NFTs to existing collectors selected on a random basis as a big thank you from the Demons Club. </p>
                                    <br />
                                    <p>Commence development of Demons Club FMX game.</p>
                                    <br />
                                    <p>Demons Club NFT holders enjoy the privileges.</p>
                                </div>
                            </div>
                            <div className="roadmap_img">
                                <Image src={roadmap5}  style={{width:'100%'}} />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}