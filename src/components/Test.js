import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Link, useParams, useNavigate
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
import { BsClipboard } from 'react-icons/bs'
import home_nft from '../assets/images/mint-a-b.png'

import { toast } from 'react-toastify';

import { setWallet } from '../actions/manager';
import { hasEnoughEth, mint, getTotalMinted, getSignatureForMint, shortAddress, renameNFT, hasEnoughEthForRename, getSignatureForRename, getGroupId } from '../lib/mint';

const PRICE = Number(process.env.REACT_APP_PRICE)
const RENAME_PRICE = process.env.REACT_APP_RENAME_PRICE

const NETWORK = process.env.REACT_APP_NETWORK;
const CHAIN_ID = Number(process.env.REACT_APP_MAINNET_ID)
const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS


export default function Test() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const wallet = useSelector(state => state.manager.wallet)
    const [initWeb3, setInitWeb3] = useState(false);
    const [minting, setMinting] = useState(false);
    const [buying, setBuying] = useState(false)
    const [totalMinted, setTotalMinted] = useState(0);
    const [quantity, setQuantity] = useState(1)
    const [tokenId, setTokenId] = useState(-1)
    const [name, setName] = useState("")
    const [renaming, setRenaming] = useState(false)

    useEffect(() => {
        if (getGroupId(id) === -1) {
            navigate('/', { replace: true })
        }
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
                if (Number(networkId) !== CHAIN_ID) {
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
            conMetamask();
        }
        setTotal()
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
                if (Number(chainId) !== CHAIN_ID) {
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
                dispatch(setWallet(accounts[0]))
                // console.log(await window.web3.eth.getBalance(accounts[0]));
                if (getGroupId(id) >= 0) {
                    if (accounts[0] && e) {
                        setMinting(true);
                        if (await hasEnoughEth(accounts[0], quantity)) {
                            if (await mint(accounts[0], quantity, getGroupId(id))) {
                                toast.success(`${quantity} NFT Minted Successfully.`, {
                                    position: "top-right",
                                    autoClose: 3000,
                                    closeOnClick: true,
                                    hideProgressBar: true,
                                });
                                setTotal();
                            }
                        } else {
                            toast.warn(`Insufficient funds. Check your wallet balance. You need 0.05 ETH + GAS fee at ${accounts[0]}`, {
                                position: "top-right",
                                autoClose: 3000,
                                closeOnClick: true,
                                hideProgressBar: true,
                            });
                        }
                        setMinting(false);
                    }
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
        } catch (err) {
            // console.log(err.message)
        }
    };

    const setTotal = async () => {
        let total = await getTotalMinted();
        setTotalMinted(total);
    }

    const changeTokenId = (e) => {
        if (e.target.value >= 0 && e.target.value <= 10000) {
            setTokenId(Number(e.target.value))
        } else {
            toast.warn('please input correct token ID', {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: true,
            });
        }
    }

    const changeName = (e) => {
        let name = e.target.value.trim();
        setName(name)
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
        let groupId = getGroupId(id)
        if (groupId >= 0) {
            let signature = await getSignatureForMint(wallet, quantity, groupId)
            const signedData = signSmartContractData({
                address: wallet, //user wallet
                commodity: 'ETH',
                commodity_amount: (PRICE * quantity).toString(),
                pk_id: 'key1',
                sc_address: NFT_ADDRESS,//ropsten abc contract
                sc_id: uuidv4(), // must be unique for any request
                sc_input_data: signature,
            }, privateKey);

            const otherWidgetOptions = {
                partner_id: process.env.REACT_APP_PARTNER_ID,
                container_id: 'wert-widget',
                click_id: uuidv4(), // unique id of purhase in your system
                // origin: 'https://sandbox.wert.io', // this option needed only for this example to work
                origin: 'https://widget.wert.io', // this option needed only for this example to work
                width: 400,
                height: 600,
            };

            const wertWidget = new WertWidget({
                ...signedData,
                ...otherWidgetOptions,
            });

            window.open(wertWidget.getRedirectUrl())
        }
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

    const copy = async () => {
        await navigator.clipboard.writeText(wallet)
        toast.info(`address copied.`, {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
            hideProgressBar: true,
        });
    }

    const rename = async () => {
        if (tokenId < 0 || tokenId > 9999) {
            toast.warn(`Please input correct token ID`, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: true,
            });
            return
        }
        if (name.length < 3 || name.length > 20) {
            toast.warn(`Please input 3~20 characters for name`, {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: true,
            });

            return
        }
        try {
            setRenaming(true)

            if (initWeb3 && wallet) {
                if (await hasEnoughEthForRename(wallet)) {
                    if (await renameNFT(wallet, tokenId, name)) {
                        toast.warn(`Your NFT name was changed to "${name}"`, {
                            position: "top-right",
                            autoClose: 3000,
                            closeOnClick: true,
                            hideProgressBar: true,
                        });
                    } else {
                        toast.warn(`You can't rename now. Please check whether there is NFT with token ID or network connection`, {
                            position: "top-right",
                            autoClose: 3000,
                            closeOnClick: true,
                            hideProgressBar: true,
                        });
                    }
                } else {
                    toast.warn(`Your ETH balance is not enough for renaming`, {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        hideProgressBar: true,
                    });
                }
            } else if (wallet) {
                const privateKey = process.env.REACT_APP_PRIVATE_KEY;
                let signature = await getSignatureForRename(wallet, tokenId, name)
                if (signature) {
                    const signedData = signSmartContractData({
                        address: wallet, //user wallet
                        commodity: 'ETH',
                        commodity_amount: RENAME_PRICE,
                        pk_id: 'key1',
                        sc_address: NFT_ADDRESS,//ropsten abc contract
                        sc_id: uuidv4(), // must be unique for any request
                        sc_input_data: signature,
                    }, privateKey);

                    const otherWidgetOptions = {
                        partner_id: process.env.REACT_APP_PARTNER_ID,
                        container_id: 'wert-widget',
                        click_id: uuidv4(), // unique id of purhase in your system
                        // origin: 'https://sandbox.wert.io', // this option needed only for this example to work
                        origin: 'https://widget.wert.io', // this option needed only for this example to work
                        width: 400,
                        height: 600,
                    };

                    const wertWidget = new WertWidget({
                        ...signedData,
                        ...otherWidgetOptions,
                    });

                    window.open(wertWidget.getRedirectUrl())
                } else {
                    toast.warn(`You can't rename ABC now. Please try later.`, {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        hideProgressBar: true,
                    });
                }
            }

            setRenaming(false)
        } catch (err) {
            console.log(err.message)
        }
        setRenaming(false)
    }

    return (
        <section id="mint" style={{ paddingTop: '3vw' }}>
            <div className='my_container'>
                <h1 className="freeticket">Demons Club NFT holders are entitled to <br /> LIFETIME <span id="freeticket">FREE TICKETS</span> TO CRUSTY DEMONS EVENTS
                    <span className="go_mainpage"><Link to="/"> - GO TO MAIN PAGE - </Link></span>
                </h1>
                <div className="home_nft">
                    <Image src={home_nft} className="home_nft_pic" />
                </div>
                <h1>Limited 10,000 unique collection of utility packed Demons Club NFTs.</h1>
                <div className="mint_section">
                    <div className="mint_section_body">
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
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                        {
                            initWeb3 ?
                                <>
                                    <Button disabled={minting} className="buy_btn" onClick={conMetamask} >
                                        Mint
                                    </Button>
                                    {
                                        minting && < p style={{ textAlign: 'center', color: 'red' }}>
                                            Processing - Please Wait
                                        </p>
                                    }
                                </>
                                :
                                <>
                                    <h1 style={{ textAlign: 'center', margin: '0px', marginTop: '10px', color: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {
                                            wallet ? `${shortAddress(wallet)}` : `No Wallet Detected`
                                        }
                                        {
                                            wallet &&
                                            <Button className="copy_btn" onClick={copy}>
                                                <BsClipboard />
                                            </Button>
                                        }
                                    </h1>
                                    <Button disabled={buying} className="buy_btn" onClick={handleBuy} >
                                        {wallet ? `Mint using Cash / Fiat` : `Create Wallet Using Email Address`}
                                    </Button>

                                </>
                        }
                    </div >
                    {
                        wallet &&
                        <Link to='/collection' className='mint_section_body' style={{ textDecoration: 'none' }}>
                            < p className="mint_color">
                                My Collection
                            </p>
                        </Link >
                    }
                    <a href={`https://etherscan.io/address/${NFT_ADDRESS}`} className="view_contract" target="_blank"><p>View Contract</p>  </a>
                </div >
                <div className='mint_section rename_section_body'>
                    <div className="mint_section_body">
                        {/* <p> <span className="mint_color" >Rename </span>your Demons Club NFT</p> */}
                        <div className='rename_field'>
                            <p>< span className="mint_color" >Rename your&nbsp;</span></p>
                            <p>Demons Club NFT</p>
                        </div>
                        <div className='rename_field'>
                            <p>Rename Price:&nbsp;</p>
                            <p>< span className="mint_color" > {`${RENAME_PRICE} Eth + Gas Fee`} </span></p>
                        </div>
                        <div className="rename_field">
                            <input type='number' placeholder='Token ID' className='tokenId_field' onChange={changeTokenId} />
                            <input type='text' placeholder='New Name (3-20 Characters)' className='name_field' onChange={changeName} />
                        </div>
                        {
                            wallet &&
                            <Button disabled={renaming} className="buy_btn" onClick={rename} >
                                Rename
                            </Button>
                        }
                        {
                            renaming && < p style={{ textAlign: 'center', color: 'red' }}>
                                Processing - Please Wait
                            </p>
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}