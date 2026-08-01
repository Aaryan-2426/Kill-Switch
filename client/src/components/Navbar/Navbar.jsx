import { useState } from "react";
import { BrowserProvider, formatEther } from "ethers";

function Navbar() {

  const [wallet, setWallet] = useState(null);

  async function connectWallet() {

    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    try {

      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const address = await signer.getAddress();

      const network = await provider.getNetwork();

      const balance = await provider.getBalance(address);

      setWallet({
        address,
        network:
          network.chainId === 31337n
            ? "Hardhat Local"
            : network.name,
        balance: formatEther(balance),
      });

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          Kill Switch
        </h1>

        <p className="text-sm text-gray-400">
          Autonomous Wallet Protection
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-green-400 font-medium">
            System Active
          </span>
        </div>

        {!wallet ? (
          <button
            onClick={connectWallet}
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-right text-sm">

            <p className="text-cyan-400 font-semibold">
              {wallet.address.slice(0, 6)}...
              {wallet.address.slice(-4)}
            </p>

            <p className="text-gray-400">
              {wallet.network}
            </p>

            <p className="text-green-400">
              {Number(wallet.balance).toFixed(4)} ETH
            </p>

          </div>
        )}

      </div>

    </header>
  );
}

export default Navbar;