const { ethers } = require("ethers");
require("dotenv").config();

// Import Contract ABI
const contractJson = require("../../blockchain/artifacts/contracts/AgentWallet.sol/AgentWallet.json");

// Provider
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

// Hardhat Account #0
const PRIVATE_KEY =
"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// Wallet
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Contract
const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    contractJson.abi,
    wallet
);

module.exports = contract;