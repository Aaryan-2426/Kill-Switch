import { useState } from "react";
import { BrowserProvider, formatEther } from "ethers";
import toast from "react-hot-toast";

function Navbar() {
  const [wallet, setWallet] = useState(null);

  async function connectWallet() {
    if (!window.ethereum) {
      toast.error("Please install MetaMask");
      return;
    }

    try {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const address = await signer.getAddress();

      const balance = await provider.getBalance(address);

      setWallet({
        address,
        balance: formatEther(balance),
      });

      toast.success("MetaMask Connected");
    } catch (err) {
      console.log(err);
      toast.error("Connection Failed");
    }
  }

  return (
    <header className="sticky top-0 z-50 h-20 bg-zinc-900/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg flex items-center justify-between px-8">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Kill Switch AI
        </h1>

        <p className="text-sm text-gray-300 tracking-wide">
          Autonomous Wallet Protection
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* System Status */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-green-400 font-semibold">
            System Active
          </span>
        </div>

        {/* Wallet */}
        {!wallet ? (
          <button
            onClick={connectWallet}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            🦊 Connect MetaMask
          </button>
        ) : (
          <div className="bg-zinc-800 border border-cyan-500/20 rounded-full px-5 py-2 flex items-center gap-4 shadow-lg">
            <span className="text-green-400 text-lg">🟢</span>

            <span className="text-cyan-400 font-semibold">
              {wallet.address.slice(0, 6)}...
              {wallet.address.slice(-4)}
            </span>

            <span className="text-green-400 font-semibold">
              {Number(wallet.balance).toFixed(2)} ETH
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;