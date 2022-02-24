import React from 'react'
import {Container, Row, Image} from 'react-bootstrap'
import roadmap1 from '../assets/images/1.png'
import roadmap2 from '../assets/images/2.png'
import roadmap3 from '../assets/images/3.png'
import roadmap4 from '../assets/images/4.png'
import roadmap5 from '../assets/images/5.png'

export default function Roadmap(){
    return(
        <section id="roadmap">
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
                                    <p>2,500 Crusty Demons NFTs will be available for minting.</p>
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
                                    <h1>25% Crusty Demons Airdrop</h1>
                                    <p>Exclusive for the first few collectors (randomly selected), Chief Demon will airdrop 50 free NFTs.</p>
                                    <p>Further 2,500 Crusty Demon NFTs will be made available for minting.</p>
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
                                    <h1>50% More Giveaways </h1>
                                    <p>A further 50 Crusty Demons NFTs will be given away to existing collectors based on the number of their referrals.</p>
                                    <p>Further 2,500 Crusty Demons NFTs will be made available for minting. </p>
                                    <p>Metaverse research will commence and development of initial specifications for the decentralized Crusty Demons Club game.</p>
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
                                    <h1>75% Further Release & Airdrop</h1>
                                    <p>A further 100 Crusty Demons NFTs will be given away to existing collectors based on the number of their referrals.</p>
                                    <p>Chief Demon will give away another 50 Crusty Demons NFTs to collectors on a randomly selected basis.</p>
                                    <p>Balance of 5,000 Crusty Demons NFTs will be made available for minting.</p>
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
                                    <p>This is the new beginning.  </p>
                                    <p>In another act of generosity, Chief Demon will give away a further 50 Crusty Demons NFTs to existing collectors based on a random basis as a big thank you from the Crusty Demons Club. </p>
                                    <p>Commence development of decentralized Crusty Demons FMX game.</p>
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