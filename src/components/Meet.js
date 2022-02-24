import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import Team1 from '../assets/images/11.png'
import Team2 from '../assets/images/12.png'
import Team3 from '../assets/images/13.png'
import Team4 from '../assets/images/14.png'
import Team5 from '../assets/images/15.png'
import Team6 from '../assets/images/16.png'
import Team7 from '../assets/images/1.png'
import Team8 from '../assets/images/2.png'
import Team9 from '../assets/images/3.png'

export default function Meet() {
	return(
		<section id="meet">
			<Container>
				<Row>
					<div className="meet_content">
						<h1>Team</h1>
					</div>
				</Row>
				<Row>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team1} alt="member1" className="team_member_img" />
						</div>	
						<div className="team_member_title">
							Chief Demon
						</div>
						<div className="team_member_intro">
							Experienced entrepreneur, having grown a start-up tech company to a multination firm and listed on the ASX (Australian Securities Exchange).  Also, listed another, property focused, company on the ASX.  Extensive experience in leading start-up, small and large private and public organisations. Actively involved in a number of blockchain-based, technology businesses. Providing funding, vision, leadership, experience and ideas to Crusty Demons Club.
						</div>						
					</Col>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team2} alt="member1" className="team_member_img" />
						</div>	
						<div className="team_member_title">
							Chief Artist Extraordinaire
						</div>
						<div className="team_member_intro">
							Experienced international artist with raw talent and significant formal training.  With over 15 years of experience in converting ideas and thoughts from concept drawings to final art including digital art.  Responsible for the design and creation of the Crusty Demons Club NFT images with the input and vision from the Team.
						</div>						
					</Col>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team3} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Support Artist 
						</div>
						<div className="team_member_intro">
							Whilst Support Artist title is a little unfair as this artist is extremely experienced in his own right with over 10 years of experience in the creation of digital art and digital design.  Responsible for aiding Chief Artist Extraordinaire, including contributing to design thoughts and creative ideas associated with the creation of the Crusty Demons Club NFT images.
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team4} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Technical Wiz
						</div>
						<div className="team_member_intro">
							Batchelor’s degree in software engineering with over 5 years’ international, industry experience including extensive blockchain, web3, smart contract, tokens, payment systems experience. Jointly responsible for UI, backend, minting engine, smart contract development and deployment of Crusty Demon Club NFTs, including on-going platform management and enhancement.
						</div>
					</Col>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team5} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Blockchain/NFT Geek
						</div>			
						<div className="team_member_intro">
							Master’s degree in computer science with over 8 years’ international experience in all things blockchain, NFTs, smart contracts, random programmatic image generation, including development frameworks such as MEVN, MEAN, Laravel, node.js, and others. Jointly responsible for UI, backend, minting engine, smart contract development and deployment of Crusty Demon Club website, including on-going platform management and enhancement.
						</div>
					</Col>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team6} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Networking Crusty
						</div>			
						<div className="team_member_intro">
							Former stockbroker and financial adviser with a strong multinational network of contacts.  Able to speak underwater with gravel in his mouth (figuratively speaking), he can’t in reality.  Responsible for expanding the reach and exposure of Curtsy Demons Club including on-going utility expansion and partner recruitment and engagement.
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team7} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Business & Marketing Guru
						</div>
						<div className="team_member_intro">
							Entrepreneur and veteran marketer having more than 15 years’ experience in business marketing.  Owner and operator of one of Australian largest event promotions organisations. Well-connected in all things; sports and music in Australia and internationally.  His businesses have large social media fan followers. Responsible for all things marketing and on-going utility sourcing and expansion for Crusty Demons Club.
						</div>
					</Col>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team8} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Financial (Boring) Type
						</div>
						<div className="team_member_intro">
							Qualified accountant with over 4 years’ industry experience with start-up, small and large organisations.  Keen interest in all things blockchain, NFT and crypto generally.  Avid listed company share and cryptocurrency trader (including NFTs) and investor.  Providing financial management including cash-flow management, company compliance and formality to Crusty Demons Club.
						</div>
					</Col>
					<Col lg={4} md={12} sm={12}>
						<div className="team_member_outline">
							<Image src={Team9} alt="member1" className="team_member_img" />
						</div>
						<div className="team_member_title">
							Social Demon
						</div>
						<div className="team_member_intro">
							All things social media including Discord, Instagram and Twitter.  Spends his life on social media – poor guy.  Responsible for all things social media for Crusty Demons Club, with assistance, input and guidance from the Team.
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}