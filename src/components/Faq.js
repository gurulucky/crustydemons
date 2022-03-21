import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'


const Faq = () => {
    return(
        <section id="faq" style={{paddingTop:'150px'}}>
            <Container>
                <Row>
                    <div>
                        <h1 className="faq_title">Frequently Asked Questions</h1>
                    </div>
                </Row>                  
                <Accordion>
                  <Row>
                    <Col lg="6" md="12" sm="12">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span className="faq_number">1</span>What is an NFT?</Accordion.Header>
                        <Accordion.Body>
                          A non-fungible token, also known as an NFT is a unique unit of data that is stored on a digital ledger (Blockchain). They often represent easily reproducible items such as photos, videos and audio and use blockchain technology to show verified proof of ownership.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <span className="faq_number">2</span>How many Demons Club NFTs will there be?</Accordion.Header>
                        <Accordion.Body>
                          There will be a total of 10,000 Demons Club NFTs.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <span className="faq_number">3</span>What is the quality of a Demons Club NFT?</Accordion.Header>
                        <Accordion.Body>
                        Each Demons Club NFT that may be available (revealed) on the website is an 800 x 800 PNG file for all to right click and save, however only be owning a Demons Club NFT will you be able to unlock its super high resolution 4000 x 4000 (pixel) version, which will be available on IPFS.  You’ll then be free to print the art yourself to create your own physical items and of course, boast about your Demons Club NFT ownership status.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <span className="faq_number">4</span>When is the public sale?</Accordion.Header>
                        <Accordion.Body>
                          We will announce our public sale date on our social media platforms.  So please connect to one or all of our social channels.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <span className="faq_number">5</span>What kind of NFTs are Demons Club NFTs?</Accordion.Header>
                        <Accordion.Body>
                          ERC-721 with high resolutions images hosted on IPFS.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <span className="faq_number">6</span>How can I get a Demons Club NFT?</Accordion.Header>
                        <Accordion.Body>
                        Once the sale commences, you will need a Metamask wallet holding enough Ethereum cryptocurrency to purchase a Demons Club NFT, which can be minted on our website. Or secondary sales will be available at <a href="https://opensea.io/" target="_blank">Opensea</a> or <a href="https://clubvirtual.io/" target="_blank">ClubVirtual</a> or other reputable NFT marketplace/s.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <span className="faq_number">7</span>What should I do after minting a Demons Club NFT?</Accordion.Header>
                        <Accordion.Body>
                        You can use your Demons Club NFT as a profile picture (PFP) online, or you can resell your Demons Club NFT on the secondary market. We think you should consider holding it to benefit from the utility offerings and it will be a part of a great future gaming project, we have planned, where you will be able to use it!
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <span className="faq_number">8</span>What is MetaMask?</Accordion.Header>
                        <Accordion.Body>
                          MetaMask is a decentralized digital wallet that can be used to store digital currency (cryptocurrency) and NFTs. It can be accessed through a browser extension or through a mobile/smart phone app.  
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <span className="faq_number">9</span>I don’t have a cryptocurrency wallet yet?</Accordion.Header>
                        <Accordion.Body>
                          If you don’t have a digital wallet, you can create a MetaMask wallet by visiting <a href="https://metamask.io/" target="_blank">MetaMask</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>
                          <span className="faq_number">10</span>How much is it for a Demons Club NFT?</Accordion.Header>
                        <Accordion.Body>
                          0.08 Eth + Gas
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>
                          <span className="faq_number">11</span>What is Gas or Gas fee?</Accordion.Header>
                        <Accordion.Body>
                        Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain.  These fees are not collected or retained by Demons Club.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="11">
                        <Accordion.Header>
                          <span className="faq_number">12</span>After I buy a Demons Club NFT where will it be?</Accordion.Header>
                        <Accordion.Body>
                        Demons Club NFTs are safely stored in your Metamask (digital) wallet or your Torus wallet if you paid by credit or debit card.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="12">
                        <Accordion.Header>
                          <span className="faq_number">13</span>How many Demons Club NFTs can I buy at once?</Accordion.Header>
                        <Accordion.Body>
                        You can buy (mint) up to 30 Demons Club NFTs per transaction.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="13">
                        <Accordion.Header>
                          <span className="faq_number">14</span>After I purchase a Demons Club NFT will I own the IP?  </Accordion.Header>
                        <Accordion.Body>
                        No, NFTs and IP are two different things.  The copyright and all associated IP rights belong to Club Virtual Pty Ltd and Demons Club.  Please refer to the Terms & Conditions for further details.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="14">
                        <Accordion.Header>
                          <span className="faq_number">15</span>What are the royalty fees for secondary sales of Demons Club NFTs?</Accordion.Header>
                        <Accordion.Body>
                        The royalty fees are fixed at 10%. A portion of those royalties will be used for marketing to help the Demons Club community grow. Our team is very committed to the long-term success of this project.  
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="15">
                        <Accordion.Header>
                          <span className="faq_number">16</span>Will you have any team tokens?</Accordion.Header>
                        <Accordion.Body>
                        500 Demons Club NFTs will be reserved for promotion, give aways and our developers.
                        </Accordion.Body>
                      </Accordion.Item>
                      </Col>
                    <Col lg="6" md="12" sm="12">
                      <Accordion.Item eventKey="16">
                        <Accordion.Header>
                          <span className="faq_number">17</span>How can I contact an official Demons Club team member?</Accordion.Header>
                        <Accordion.Body>
                        You can contact our official team be sending an email to our official <a href="mailto:admin@crusty.com">Crusty email</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="17">
                        <Accordion.Header>
                          <span className="faq_number">18</span>Do you do giveaways?  </Accordion.Header>
                        <Accordion.Body>
                          We will hold giveaways in our Discord server and social media accounts and be rewarding those who refers us to their friends.  Please follow through our links to benefit from these and don’t forget to refer us to your friends.  Please also refer to our Roadmap. 
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="18">
                        <Accordion.Header>
                          <span className="faq_number">19</span>How do I get involved?</Accordion.Header>
                        <Accordion.Body>
                          Head over to the Discord and join the conversation or our other social media channels.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="19">
                        <Accordion.Header>
                          <span className="faq_number">20</span>Will there be utility for the Demons Club?</Accordion.Header>
                        <Accordion.Body>
                        Absolutely. Between our planned game, IRL meetup plans, planned merch sale release, FREE Crusty Demons tickets to events, and future NFT drops, we will continually be adding value for those holding a Demons Club NFT.  Also, you’ll be an exclusive member of the Demons Club socialite community and who knows what that may bring in the future.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="20">
                        <Accordion.Header>
                          <span className="faq_number">21</span>Will you work with partners?</Accordion.Header>
                        <Accordion.Body>
                        Demons Club Club is committed to working with those who continue to promote and participate constructively in the NFT space.  If you are building the next exciting metaverse, a reputable streetwear brand or maybe a drink label looking to collaborate with an exciting and progressive NFT project (and passionate team) then we’d love to hear from you.  Please send us an email to our official <a href="mailto:admin@crusty.com">Crusty email</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="21">
                        <Accordion.Header>
                          <span className="faq_number">22</span>Are Demons Club Club NFTs a good investment?</Accordion.Header>
                        <Accordion.Body>
                        That is a decision for you to make. The Demons Club NFTs are non-fungible tokens that represent ownership of a digital artwork that comes with certain utility. No information on this website is or may be considered investment advice.  Our team is committed to building a strong community around the project and we believe the Demons Club will have a long life ahead of it and will be an ever-evolving project. However, the success of the Demons Club relies on so many factors that no one knows! Please don’t spend money you can’t afford to lose.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="22">
                      <Accordion.Header>
                          <span className="faq_number">23</span>As a Demons Club NFT holder, how do I claim the Crusty Demons free tickets to events?</Accordion.Header>
                        <Accordion.Body>
                        You can claim your free ticket for a Crusty Demons event by completing and submitting this <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPPbmyp486b64uyNPBsI8VbjJ7L5gbADWJlwHt0O_IYqaeyQ/viewform" target="_blank">form</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="23">
                      <Accordion.Header>
                          <span className="faq_number">24</span>How many free Crusty Demons event tickets am I entitled to as a Demons Club NFT Holder?</Accordion.Header>
                        <Accordion.Body>
                        You are entitled to claim one free ticket per event per Demons Club NFT you hold.  Cursty Demons Free tickets, like with all other event tickets, are subject to availability.  So you need to claim your free Crusty Demons ticket as soon as possible to avoid missing out due to an event sell-out.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="24">
                      <Accordion.Header>
                          <span className="faq_number">25</span>Can I bring someone along to a Crusty Demons event when I have obtained a free ticket?</Accordion.Header>
                        <Accordion.Body>
                        A Crusty Demons free ticket can only be used to admit one person being the Demons Club NFT holder and is not transferable.  You may certainly bring someone with you to a Crusty Demons event, however the other person/s will need to have valid, fully paid, event ticket/s.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="25">
                      <Accordion.Header>
                          <span className="faq_number">26</span>If I obtain a free Crusty Demons event ticket and for some reason cannot attend the event, can I give my ticket to someone else?</Accordion.Header>
                        <Accordion.Body>
                        Sorry, same rule applies.  Free event tickets are only available for use by Crusty Demons Club NFT holders.  If you obtain a free Crusty Demons event ticket and for some reason cannot or do not attend the event, for which the free ticket was issued, then the ticket will lapse. 
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="26">
                      <Accordion.Header>
                          <span className="faq_number">27</span>Does the offer for free Crusty Demons tickets to Demons Club NFT holders ever expire?</Accordion.Header>
                        <Accordion.Body>
                        No.  This is an exclusive benefit to all Demons Club NFT holders!  As a Demons Club NFT holder you are entitled to a lifetime of free Crusty Demons event tickets, whilst you are the owner/holder of the Demons Club NFT.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="27">
                      <Accordion.Header>
                          <span className="faq_number">28</span>Am I entitled to any Demons Club utility if I sell my Demons Club NFT in the secondary market.</Accordion.Header>
                        <Accordion.Body>
                        No, Demons Club utility is only available to current holders of Demons Club NFTs.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="28">
                      <Accordion.Header>
                          <span className="faq_number">29</span>Am I entitled to free Crusty Demons event tickets if I sell my Demons Club NFT in the secondary market.</Accordion.Header>
                        <Accordion.Body>
                        No, the free Crusty Demons ticket entitlement is only available to current holders of Demons Club NFTs.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="29">
                      <Accordion.Header>
                          <span className="faq_number">30</span>Can I resell free tickets that I obtain as a Demons Club NFT holder?</Accordion.Header>
                        <Accordion.Body>
                        Absolutely not.  Free Crusty Demons tickets are a privilege afforded to Demons Club NFT holders only.  The free tickets are non-transferrable and can only be used by Demons Club NFT holders, which is verifiable by the NFT holder’s digital wallet.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="30">
                      <Accordion.Header>
                          <span className="faq_number">31</span>How do I gain access to the other utility offered by being a Demons Club NFT holder?</Accordion.Header>
                        <Accordion.Body>
                        Access to other Demons Club utility is accessed by keeping in contact with us via our social media channels.
                        </Accordion.Body>
                      </Accordion.Item>
                       <Accordion.Item eventKey="31">
                      <Accordion.Header>
                          <span className="faq_number">32</span>How does my friend, who is not a Demons Club NFT holder, get access to free tickets and the other utility offered by being a Demons Club NFT holder?  </Accordion.Header>
                        <Accordion.Body>
                        Crusty Demons free tickets and other utility are exclusively available to Demons Club NFT holders only.  The only way your friend can gain access to these benefits is to either buy a Demons Club NFT at the time of launch or on the secondary market (assuming someone would be willing to sell their Demons Club NFT).  Good luck to them.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Col>
                  </Row>
                </Accordion>
            </Container>
        </section>
    )
}

export default Faq