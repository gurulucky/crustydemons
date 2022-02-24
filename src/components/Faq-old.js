import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'


const Faq = () => {
    return(
        <section id="faq">
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
                          <span className="faq_number">2</span>How many Crusty Demons NFTs will there be?</Accordion.Header>
                        <Accordion.Body>
                          There will be a total of 10,000 Crusty Demons NFTs.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <span className="faq_number">3</span>What is the quality of a Crusty Demons NFT?</Accordion.Header>
                        <Accordion.Body>
                        Each Crusty Demons NFT available on the website is an 800 x 800 PNG file for all to right click and save, however only be owning a Crusty Demons NFT will you be able to unlock its super high resolution 4000 x 4000 (pixel) version, which will be available on IPFS.  You’ll then be free to print the art yourself to create your own physical items and of course, boast about your Crusty Demons NFT ownership status.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <span className="faq_number">4</span>When is the public sale?</Accordion.Header>
                        <Accordion.Body>
                          TBA
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <span className="faq_number">5</span>What kind of NFTs are Crusty Demons NFTs?</Accordion.Header>
                        <Accordion.Body>
                          ERC-721 with high resolutions images hosted on IPFS.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <span className="faq_number">6</span>How can I get a Crusty Demons NFT?</Accordion.Header>
                        <Accordion.Body>
                        One the sale commences, you will need a Metamask wallet holding enough Ethereum cryptocurrency to purchase a Crusty Demons NFT, which can be minted on our website. Or secondary sales will be available at opensea.io or clubvirtual.io or other reputable NFT marketplace/s.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <span className="faq_number">7</span>What should I do after minting a Crusty Demons NFT?</Accordion.Header>
                        <Accordion.Body>
                        You can use your Crusty Demons NFT as a profile picture (PFP) online, or you can resell your Crusty Demons NFT on the secondary market. We think you should consider holding it to benefit from the utility offerings and it will be a part of a great gaming project, we have planned, where you will be able to use it!
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <span className="faq_number">8</span>What is Metamask?</Accordion.Header>
                        <Accordion.Body>
                          MetaMask is a decentralized digital wallet that can be used to store digital currency (cryptocurrency) and NFTs. It can be accessed through a browser extension or through a mobile/smart phone app.  
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <span className="faq_number">9</span>I don’t have a cryptocurrency wallet yet?</Accordion.Header>
                        <Accordion.Body>
                          If you don’t have a digital wallet, you can create a Metamask wallet by visiting https://metamask.io/
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>
                          <span className="faq_number">10</span>How much is it for a Crusty Demons NFT?</Accordion.Header>
                        <Accordion.Body>
                          0.08 Eth + Gas
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>
                          <span className="faq_number">11</span>What is Gas or Gas fee?</Accordion.Header>
                        <Accordion.Body>
                        Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain.  These fees are not collected or retained by Crusty Demons.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Col>
                    <Col lg="6" md="12" sm="12">
                      <Accordion.Item eventKey="11">
                        <Accordion.Header>
                          <span className="faq_number">12</span>After I buy a Crusty Demons NFT where will it be?</Accordion.Header>
                        <Accordion.Body>
                        Crusty Demons NFTs are safely stored in your Metamask (digital) wallet.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="12">
                        <Accordion.Header>
                          <span className="faq_number">13</span>How many Crusty Demons NFTs can I buy at once?</Accordion.Header>
                        <Accordion.Body>
                        You can buy (mint) up to 10 Crusty Demons NFTs per transaction.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="13">
                        <Accordion.Header>
                          <span className="faq_number">14</span>After I purchase a Crusty Demons NFT will I own the IP?  </Accordion.Header>
                        <Accordion.Body>
                        No, NFTs and IP are two different things.  The copyright and all associated IP rights belong to Crusty Demons.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="14">
                        <Accordion.Header>
                          <span className="faq_number">15</span>What are the royalty fees for secondary sales of Crusty Demons NFTs?</Accordion.Header>
                        <Accordion.Body>
                        The royalty fees are fixed at 7.5%. A portion of those royalties will be used for marketing to help the Crusty Demons community grow. Our team is very committed to the long-term success of this project.  
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="15">
                        <Accordion.Header>
                          <span className="faq_number">16</span>Will you have any team tokens?</Accordion.Header>
                        <Accordion.Body>
                        500 Crusty Demons NFTs will be reserved for promotion, give aways and our developers.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="16">
                        <Accordion.Header>
                          <span className="faq_number">17</span>How can I contact an official Crusty Demons team member?</Accordion.Header>
                        <Accordion.Body>
                        You can contact our official team be sending an email to our official email admin@crusty.com
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
                          Head over to the Discord and join the conversation.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="19">
                        <Accordion.Header>
                          <span className="faq_number">20</span>Will there be utility for the Crusty Demons?</Accordion.Header>
                        <Accordion.Body>
                        Absolutely. Between our planned metaverse game, IRL meetup plans, planned merch sale release, tickets to events, and future NFT drops, we will continually adding value for those holding any of the Crusty Demons NFTs.  Also, you’ll be an exclusive member of the Crusty Demons socialite community and who knows what that may bring in the future.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="20">
                        <Accordion.Header>
                          <span className="faq_number">21</span>Will you work with partners?</Accordion.Header>
                        <Accordion.Body>
                        Crusty Demons is committed to working with those who continue to promote and participate constructively in the NFT space.  If you are building the next exciting metaverse, a reputable streetwear brand or maybe a drink label looking to collaborate with an exciting and progressive NFT project (and passionate team) then we’d love to hear from you.  Please send us an email to admin@custy.com
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="21">
                        <Accordion.Header>
                          <span className="faq_number">22</span>Are Crusty Demons NFTs a good investment?</Accordion.Header>
                        <Accordion.Body>
                        That is a decision for you to make. The Crusty Demons NFTs are non-fungible tokens that represent ownership of a digital artwork only. No information on this website is or may be considered investment advice.  Our team is committed to building a strong community around the project and we believe the Crusty Demons will have a long life ahead of it and will be an ever-evolving project. However, the success of the Crusty Demons relies on so many factors that no one knows! Please don’t spend money you can’t afford to lose.
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