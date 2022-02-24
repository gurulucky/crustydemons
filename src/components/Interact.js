import Input from '../Crusty Demons_summary.txt';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

const contractABI = require("../contract-abi.json");
const contractAddress = "0x53254267052c7797f1275C9E53bD22accd8a1c48";

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


// make the array of all tokenUri
const tokenUri_Array = [];

fetch(Input)
	.then((r) => r.text())
	.then(text  => {
		const lines = text.split("\r\n");
		for(var line = 1; line < lines.length; line ++){
			if(lines[line]){
				const infuraUrlset = lines[line].split("	");
				var element = "http" + infuraUrlset[infuraUrlset.length - 1].slice(5);
				tokenUri_Array.push(element);
			}
		}
		
})

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Mint Now",
        address: addressArray[0],
      };
	  
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } 
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Mint Now",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to MetaMask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  }
  else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
              You must install the Metamask extension, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  } 
};


export const mintNFT = async (mint_number) => {
	const nftCount = mint_number;
	window.contract = await new web3.eth.Contract(contractABI, contractAddress);
	const mintedNFT_Count = await window.contract.methods._tokenIds.length;
	
	if (mintedNFT_Count + nftCount > 10000){
		return;
	}

	const start = mintedNFT_Count;
	const end =  start + nftCount;
	const Active_tokenUriset = tokenUri_Array.slice(start, end);
	console.log(Active_tokenUriset);
	
	const addressArray = await window.ethereum.request({
        method: "eth_accounts",
    });
	
	const walletAddress = addressArray[0];
	const balance_wei = await web3.eth.getBalance(walletAddress); //Will give value in.
	const balance_ether = web3.utils.fromWei(balance_wei, 'ether')
	console.log(balance_ether);
	
	const amount_ether = 0.08 * nftCount;
	
	const amount_wei = web3.utils.toWei(amount_ether.toString(), 'ether');
	console.log(amount_wei);
	
	if(balance_ether < amount_ether){
    toast.warn('Insufficient Funds', {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      hideProgressBar: true,
    });
		return;
	}
	else{
		web3.eth.sendTransaction({
			from: walletAddress,
			to: contractAddress,
			value: amount_wei,
			data: window.contract.methods
			  .createToken(Active_tokenUriset, nftCount)
			  .encodeABI(),
		});
	}
};

