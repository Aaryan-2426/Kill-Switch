import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  console.log("Deploying AgentWallet...");

  const factory = await ethers.getContractFactory("AgentWallet");
  const contract = await factory.deploy();

  await contract.waitForDeployment();
  const signers = await ethers.getSigners();

  const wallet1 = await signers[1].getAddress();
  const wallet2 = await signers[2].getAddress();
  const wallet3 = await signers[3].getAddress();
  console.log("Adding allowed wallets...");

  await (await contract.addAllowed(wallet1)).wait();
  await (await contract.addAllowed(wallet2)).wait();
  await (await contract.addAllowed(wallet3)).wait();

  console.log("✅ Allowed wallets added");
  const owner = signers[0];

    await owner.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther("100")
    });

    console.log("✅ Contract funded with 100 ETH");

  console.log("================================");
  console.log("✅ AgentWallet deployed!");
  console.log("Address:", await contract.getAddress());
  console.log("================================");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});