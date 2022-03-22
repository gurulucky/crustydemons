import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
	Link
  } from "react-router-dom";
import Web3 from 'web3'
import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import Torus from '@toruslabs/torus-embed'
// import {
// 	connectWallet,
// 	getCurrentWalletConnected,
// 	mintNFT
// } from "./Interact.js";
import { Image, Button, Nav } from 'react-bootstrap'
import home_nft from '../assets/images/mint-a-b.png'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { setWallet } from '../actions/manager';
import { hasEnoughEth, mint, getTotalMinted, getSignatureForMint } from '../lib/mint';

const PRICE = Number(process.env.REACT_APP_PRICE)
const NETWORK = process.env.REACT_APP_NETWORK;
const CHAIN_ID = Number(process.env.REACT_APP_ROPSTEN_ID)
const NFT_ADDRESS = '0x0f6CcC6a8555eF5Bd6dC92D0eF509e2675217786'


export default function Home() {
	const dispatch = useDispatch()
	const wallet = useSelector(state => state.manager.wallet)
	const [initWeb3, setInitWeb3] = useState(false);
	const [minting, setMinting] = useState(false);
	const [buying, setBuying] = useState(false)
	const [web3authReady, setWeb3authReady] = useState(false)
	const [totalMinted, setTotalMinted] = useState(0);
	const [quantity, setQuantity] = useState(1)

	const [status, setStatus] = useState("");

	useEffect(() => {
		if (window.ethereum && !initWeb3) {
			setInitWeb3(true);
			window.web3 = new Web3(window.ethereum);
			window.ethereum.on('accountsChanged', function (accounts) {
				// if (accounts[0] !== account) {
				console.log("change", accounts[0]);
				conMetamask();
				// }
			});
			window.ethereum.on('networkChanged', function (networkId) {
				if (Number(networkId) !== Number(process.env.REACT_APP_ROPSTEN_ID)) {
					toast.warn(`Connect to ${NETWORK} network.`, {
						position: "top-right",
						autoClose: 3000,
						closeOnClick: true,
						hideProgressBar: true,
					});
					return;
				}
				conMetamask();
			});
			// conMetamask();
		}else{
		}
		setTotal()
		// getRyoshiBalance(account, zksyncWallet);
	}, []);

	/// window.ethereum used to get addrss
	const conMetamask = async (e) => {
		// console.log(e);
		if (window.ethereum) {
			try {
				// const addressArray = await window.ethereum.request({
				//   method: "eth_requestAccounts",
				// });
				// window.web3 = new Web3(window.ethereum);
				//   console.log("account",addressArray[0]);
				const chainId = await window.ethereum.request({
					method: "eth_chainId"
				});
				if (Number(chainId) !== Number(process.env.REACT_APP_ROPSTEN_ID)) {
					console.log(chainId)
					toast.warn(`Connect to ${NETWORK} network.`, {
						position: "top-right",
						autoClose: 3000,
						closeOnClick: true,
						hideProgressBar: true,
					});

					return;
				}
				const accounts = await window.ethereum.enable();
				console.log(accounts);
				// console.log(await window.web3.eth.getBalance(accounts[0]));
				if (accounts[0] && e) {
					setMinting(true);
					if (await hasEnoughEth(accounts[0], quantity)) {
						if (await mint(accounts[0], quantity)) {
							toast.warn(`Minting ${quantity} NFTs succeed`, {
								position: "top-right",
								autoClose: 3000,
								closeOnClick: true,
								hideProgressBar: true,
							});
							setTotal();
						}
					} else {
						toast.warn(`Insufficient funds. Check your wallet balance. You need 0.08 ETH + GAS fee at ${accounts[0]}`, {
							position: "top-right",
							autoClose: 3000,
							closeOnClick: true,
							hideProgressBar: true,
						});
					}
					setMinting(false);
				}
			} catch (err) {
				setMinting(false);
			}
		} else {
			toast.warn('Please install MetaMask extension in your browser', {
				position: "top-right",
				autoClose: 3000,
				closeOnClick: true,
				hideProgressBar: true,
			});
		}
	}

	const login = async () => {
        try {
            const torus = new Torus();
            await torus.init();
            await torus.login(); // await torus.ethereum.enable()
            const web3 = new Web3(torus.provider);
            torus.provider.on('accountsChanged', function (accounts) {
                // if (accounts[0] !== account) {
                dispatch(setWallet(accounts[0]))
                window.localStorage.setItem('wallet', accounts[0])
                console.log("change", accounts[0]);
                // }
            });
            torus.provider.on('networkChanged', function (networkId) {
                if (Number(networkId) !== CHAIN_ID) {
                    toast.warn(`Connect to ${NETWORK} network.`, {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        hideProgressBar: true,
                    });
                    return;
                }
            });
            const address = (await web3.eth.getAccounts())[0];
            dispatch(setWallet(address))
            window.localStorage.setItem('wallet', address)
            const balance = await web3.eth.getBalance(address);
            // console.log(await web3auth.getUserInfo())
            console.log(address, balance)
        } catch(err) {
            // console.log(err.message)
        }
    };

	const setTotal = async () => {
		let total = await getTotalMinted();
		setTotalMinted(total);
	}

	const changeQuantity = (e) => {
		if (e.target.value > 10) {
			return;
		}
		dispatch(setQuantity(e.target.value));
	}

	const handleBuy = async () => {
		if (wallet) {
			buy()
		} else {
			login()
		}
	}

	const buy = async () => {
		setBuying(true)
		const privateKey = process.env.REACT_APP_PRIVATE_KEY;
		let signature = await getSignatureForMint(wallet, quantity)
		const signedData = signSmartContractData({
			address: wallet, //user wallet
			commodity: 'ETH',
			commodity_amount: (PRICE * quantity).toString(),
			pk_id: 'key1',
			sc_address: process.env.REACT_APP_NFT_ADDRESS,//ropsten abc contract
			sc_id: uuidv4(), // must be unique for any request
			sc_input_data: signature,
		}, privateKey);

		const otherWidgetOptions = {
			partner_id: process.env.REACT_APP_PARTNER_ID,
			container_id: 'widget',
			click_id: uuidv4(), // unique id of purhase in your system
			origin: 'https://sandbox.wert.io', // this option needed only for this example to work
			width: 400,
			height: 600,
		};

		const wertWidget = new WertWidget({
			...signedData,
			...otherWidgetOptions,
		});

		window.open(wertWidget.getRedirectUrl())
		setBuying(false)
	}

	const reduce_Number = () => {
		if (quantity > 1) {
			setQuantity(parseInt(quantity) - 1);
		}
	}

	const increase_Number = () => {
		if (quantity < 30) {
			setQuantity(parseInt(quantity) + 1);
		}
	}

	return (
		<section id="mint">
			<div className='my_container'>
				<h1 className="freeticket">Demons Club NFT holders are entitled to <br /> LIFETIME <span id="freeticket">FREE TICKETS</span> TO ALL CRUSTY DEMONS EVENTS</h1>
				<div className="home_nft">
					<Image src={home_nft} className="home_nft_pic" />
				</div>
				<h1>Limited 10,000 unique collection of utility packed Demons Club NFTs.</h1>
				<div className="mint_section">
					{/* <div className="mint_section_body">
						<p> Total Minted: < span className="mint_color" > {`${totalMinted} / 10000`} </span></p>
						<p> <span className="mint_color" > Mint </span> Demons Club NFT</p>
						<p> Price: < span className="mint_color" > {`${PRICE} Eth + Gas Fee`} </span></p>
						<div className="mint_counter">
							<div className="counter_form" >
								<Button className="mint_counter_btn1" onClick={reduce_Number}> - </Button>
								<span > {quantity} </span>
								<Button className="mint_counter_btn1" onClick={increase_Number}> + </Button>
							</div >
							<Button className="mint_counter_btn" value={5} onClick={(e) => setQuantity(Number(e.target.value))} > 5 </Button>
							<Button value={10} onClick={(e) => setQuantity(e.target.value)} className="mint_counter_btn"> 10 </Button>
							<Button value={30} onClick={(e) => setQuantity(e.target.value)} className="mint_counter_btn" > 30 </Button>
						</div>
					</div> */}
					<p className="coming">Coming Soon</p>
					
					{/* <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }} >
						{
							initWeb3 ?
								<Button disabled={minting} className="buy_btn" onClick={conMetamask} >
									Mint
								</Button>
								:
								<>
									<Button disabled={!web3authReady} className="buy_btn" onClick={handleBuy} >
										{wallet ? `Mint using Cash / Fiat` : `Create Wallet Using Email Address`}
									</Button>

								</>
						}
					</div >
					{
						wallet &&
						<Nav.Link href={`https://opensea.io/${wallet}`} target='_blank' style={{ textDecoration: 'none' }}>
							< span className="mint_color" >
								My collections
							</span>
						</Nav.Link >
					} */}
					{/* <Nav.Link href="https://ropsten.etherscan.io/address/0x53254267052c7797f1275C9E53bD22accd8a1c48" className="view_contract" target="_blank"> View Contract </Nav.Link> */}

				</div >
			</div>
		</section >
	)
}