import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  console.log("Deploying AgentWallet...");

  const factory = await ethers.getContractFactory("AgentWallet");
  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("================================");
  console.log("✅ AgentWallet deployed!");
  console.log("Address:", await contract.getAddress());
  console.log("================================");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});