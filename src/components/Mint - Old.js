import React from 'react'
import { useEffect, useState } from "react";
import {
	connectWallet,
	getCurrentWalletConnected,
	mintNFT
} from "./Interact.js";
import { Image, Button, Nav } from 'react-bootstrap'
import home_nft from '../assets/images/mint-a-b.png'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {

    const [mint_number, setMint_number] = useState("1");
	const [walletAddress, setWallet] = useState("");
	const [status, setStatus] = useState("");
	
	useEffect(() => {
		const Load = async () => {
			const { address, status } = await getCurrentWalletConnected();
			console.log(status)
			setWallet(address);
			setStatus(status);
			addWalletListener();
		}
		Load();
	}, []);

	function addWalletListener() {
		if (window.ethereum) {
		  window.ethereum.on("accountsChanged", (accounts) => {
			if (accounts.length > 0) {
			  setWallet(accounts[0]);
			  setStatus("Mint Now");
			} else {
			  setWallet("");
			  toast.warn('Connect to Metamask using the top right button.', {
					position: "top-right",
					autoClose: 3000,
					closeOnClick: true,
					hideProgressBar: true,
				});
			}
		  });
		} else {
			toast.warn('Please install Metamask in your browser', {
				position: "top-right",
				autoClose: 3000,
				closeOnClick: true,
				hideProgressBar: true,
			});
		  	setStatus("No_metamask");
		}
	}
	
    const reduce_Number = () => {
        if (mint_number > 1) {
            setMint_number(parseInt(mint_number) - 1);
        }
    }
	
    const increase_Number = () => {
        if (mint_number < 30) {
            setMint_number(parseInt(mint_number) + 1);
        }
    }
	
	const connectWalletPressed = async () => {
		if(status === "No_metamask"){
			toast.warn('You must install metamask in your browser', {
				position: "top-right",
				autoClose: 3000,
				closeOnClick: true,
				hideProgressBar: true,
			});
		}
		else{
			if(status === "Mint Now"){
				mintNFT(mint_number);
			}
			else {
				const walletResponse = await connectWallet();
				setStatus(walletResponse.status);
				setWallet(walletResponse.address);
			}
		}
	};

    return (
        <section id="mint">
            <div className='my_container'>
				<h1 className="freeticket">As a Crusty Demons Club NFT holder you are entitled to a<br/> LIFETIME OF <span id="freeticket">FREE TICKETS</span> TO CRUSTY DEMONS' EVENTS</h1>
                <div className="home_nft">
                    <Image src={home_nft} className="home_nft_pic" />
                </div>
                <h1>Limited 10,000 unique collection of utility packed Crusty Demons Club NFTs.</h1>
                <div className="mint_section">
                    <div className="mint_section_body">
                        <p> <span className="mint_color" > Mint </span> Crusty Demons </p>
                        <p> Price: < span className="mint_color" > 0.08 Eth + Gas Fee </span></p>
                        <div className="mint_counter">
                            <div className="counter_form" >
                                <Button className="mint_counter_btn1" onClick={reduce_Number}> - </Button>
                                <span > {mint_number} </span>
                                <Button className="mint_counter_btn1" onClick={increase_Number}> + </Button>
                            </div >
                            <Button className="mint_counter_btn" value={5} onClick={(e) => setMint_number(e.target.value)} > 5 </Button>
                            <Button value={10} onClick={(e) => setMint_number(e.target.value)} className="mint_counter_btn"> 10 </Button>
                            <Button value={30} onClick={(e) => setMint_number(e.target.value)} className="mint_counter_btn" > 30 </Button>
                        </div>
                    </div>
					<p className="coming">Coming Soon</p>
                    {/* <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }} >
                        <Button className="buy_btn" onClick={connectWalletPressed} >
							{walletAddress.length > 0 ? (
							  "Mint Now"
							) : (
							  <span>Connect Wallet</span>
							)}
						</Button>
                    </div >
                    <Nav.Link href="https://ropsten.etherscan.io/address/0x53254267052c7797f1275C9E53bD22accd8a1c48" className="view_contract" target="_blank"> View Contract </Nav.Link> 
                     */}
                </div > 
            </div>    
        </section >
    )
}