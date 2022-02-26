import Web3 from 'web3'
import { NFT_ABI } from './abi.js'
import Metadata_input from './Crusty Demons_summary.txt';
import High_res_input from './Crusty_Hi-Res_ipfsURI.txt'

const rinkebynet = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const ropstennet = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const mainnet = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';

const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS
const PRICE = process.env.REACT_APP_PRICE

var HIGH_RES_URIS = []
var METADATA_URIS = []

fetch(High_res_input)
    .then((r) => r.text())
    .then(text => {
        HIGH_RES_URIS = text.split("\n").map(item => item.replace('\r', ''))
        // console.log(HIGH_RES_URIS)
    })

fetch(Metadata_input)
    .then((r) => r.text())
    .then(text => {
        // console.log(text)
        const lines = text.split("\n");
        for (var line = 1; line < lines.length; line++) {
            if (lines[line]) {
                const infuraUrlset = lines[line].split("	");
                var element = infuraUrlset[infuraUrlset.length - 1].replace('\r', '');
                METADATA_URIS.push(element);
            }
        }
        // console.log(METADATA_URIS)
    })

export const mint = async (account, amount) => {
    console.log(account, amount)
    let abc_contract = new window.web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenCounter = await getTotalMinted()
    let mintUris = METADATA_URIS.slice(tokenCounter, tokenCounter + amount);
    console.log('mint tokenUris', mintUris);
    let res = await abc_contract.methods.mint(account, mintUris).send({ from: account, value: window.web3.utils.toWei((PRICE * amount).toString(), "ether") })
    return res.status
}

export const getTotalMinted = async () => {
    try {
        let web3 = new Web3(ropstennet)
        let abc_contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
        let tokenCounter = Number(await abc_contract.methods.totalSupply().call());
        console.log('totalminted', tokenCounter)
        return tokenCounter;
    } catch (err) {
        console.log('totalminted', err.message)
    }
}

export const getTokenUris = async (tokenIds) => {
    let web3 = new Web3(ropstennet)
    let abc_contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    let tokenUris = []
    for (let i = 0; i < tokenIds.length; i++) {
        tokenUris.push(await abc_contract.methods.tokenURI(tokenIds[i]).call())
    }
    return tokenUris
}

export const hasEnoughEth = async (account, amount) => {
    try {
        let balance = await window.web3.eth.getBalance(account);
        // console.log(balance, window.web3.utils.toWei((PRICE * amount).toString, "ether"));
        if (isBigger(String(balance), String(window.web3.utils.toWei((PRICE * amount).toString(), "ether"))) >= 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err.message);
        return false;
    }
}

export const isBigger = (x, y) => {
    x = x || "0";
    y = y || "0";
    if (x.length > y.length) y = "0".repeat(x.length - y.length) + y;
    else if (y.length > x.length) x = "0".repeat(y.length - x.length) + x;

    for (let i = 0; i < x.length; i++) {
        if (x[i] < y[i]) return -1;
        if (x[i] > y[i]) return 1;
    }
    return 0;
}


export const shortAddress = (address) => {
    if (address !== "" || address !== undefined) {
        let lowCase = address.toLowerCase();
        return "0x" + lowCase.charAt(2).toUpperCase() + lowCase.substr(3, 3) + "..." + lowCase.substr(-4);
    }
    return address;
}

export const getSignatureForMint = async (account, amount) => {
    if (!account || amount <= 0) {
        return
    }
    const web3 = new Web3(mainnet)
    let tokenCounter = await getTotalMinted()
    let mintUris = METADATA_URIS.slice(tokenCounter, tokenCounter + amount);
    console.log(mintUris)
    let signature = web3.eth.abi.encodeFunctionCall(
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "string[]",
                    "name": "tokenUris",
                    "type": "string[]"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        [account, mintUris]
    )
    return signature
}

export const getTokenIdsOf = async (account) => {
    try{
        let web3 = new Web3(ropstennet)
        let abc_contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
        let tokenIds = await abc_contract.methods.tokensOfOwner(account).call();
    
        return tokenIds.map(item => Number(item))
    }catch(err){
        console.log(err.message)
        return []
    }
}

export const getHighUris = (tokenIds) => {
    let highURIs = []
    for (let i = 0; i < tokenIds.length; i++) {
        highURIs.push(HIGH_RES_URIS[tokenIds[i]])
    }
    return highURIs
}