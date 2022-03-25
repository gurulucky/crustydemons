import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Link, useParams, useNavigate
} from "react-router-dom";
import Web3 from 'web3'
import { Image, Button, Nav } from 'react-bootstrap'
import home_nft from '../assets/images/mint-a-b.png'

import { toast } from 'react-toastify';

import { setWallet } from '../actions/manager';
import { giveaway, getTotalMinted } from '../lib/mint';

const NETWORK = process.env.REACT_APP_NETWORK;
const CHAIN_ID = Number(process.env.REACT_APP_ROPSTEN_ID)


export default function Giveaway() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [initWeb3, setInitWeb3] = useState(false);
    const [minting, setMinting] = useState(false);
    const [totalMinted, setTotalMinted] = useState(0);
    const [addresses, setAddresses] = useState([])

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
                if (accounts[0] && e) {
                    setMinting(true);
                    if (await giveaway(accounts[0], addresses, 0)) {
                        toast.success(`Giving NFT done Successfully.`, {
                            position: "top-right",
                            autoClose: 3000,
                            closeOnClick: true,
                            hideProgressBar: true,
                        });
                        setTotal();
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

    const setTotal = async () => {
        let total = await getTotalMinted();
        setTotalMinted(total);
    }

    let fileReader;

    const loadAddress = e => {
        if (!e.target.files[0]) {
            return;
        }
        let file = e.target.files;
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file[0]);
    };

    const handleFileRead = e => {
        let content = fileReader.result;
        // let text = deleteLines(content, 3);
        content = cleanContent(content);
        console.log(content)
        setAddresses(content)
    };

    const cleanContent = string => {
        string = string.replace(/^\s*[\r\n]/gm, "");
        let array = string.split(new RegExp(/[\r\n]/gm));
        // console.log(array);
        return array
    };

    return (
        <section id="mint" style={{ paddingTop: '3vw' }}>
            <div className='my_container'>
                <h1 className="freeticket">Demons Club NFT holders are entitled to <br /> LIFETIME <span id="freeticket">FREE TICKETS</span> TO CRUSTY DEMONS EVENTS
                    <span className="go_mainpage"><Link to="/"> - GO TO MAIN PAGE - </Link></span>
                </h1>
                <div className="home_nft">
                    <Image src={home_nft} className="home_nft_pic" />
                </div>
                <div className="mint_section">
                    <div className="mint_section_body">
                        <p>Give a Demons</p>
                        <p> Total Minted: < span className="mint_color" > {`${totalMinted} / 10000`} </span></p>
                        <p> <span className="mint_color" > Mint </span> Demons Club NFT</p>

                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                        <Button className="buy_btn" >
                            {`Load addresses`}
                            <input type="file" name="myfile" onChange={loadAddress} />
                        </Button>
                        {
                            addresses.map(address => <p style={{color:'white', textAlign:'center'}}>{address}</p>)
                        }
                        {
                            initWeb3 &&
                            <>
                                <Button disabled={minting} className="buy_btn" onClick={conMetamask} >
                                    Gift Away
                                </Button>
                                {
                                    minting && < p style={{ textAlign: 'center', color: 'red' }}>
                                        Processing - Please Wait
                                    </p>
                                }
                            </>
                        }
                    </div >
                    <a href="https://ropsten.etherscan.io/address/0x53254267052c7797f1275C9E53bD22accd8a1c48" className="view_contract" target="_blank"><p>View Contract</p>  </a>
                </div >
            </div>
        </section >
    )
}