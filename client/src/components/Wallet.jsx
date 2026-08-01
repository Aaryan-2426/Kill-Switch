import { useState } from "react";
import { BrowserProvider, formatEther } from "ethers";

export default function Wallet() {

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
        <div style={{ padding: "20px" }}>

            <button onClick={connectWallet}>
                Connect Wallet
            </button>

            {wallet && (
                <div style={{ marginTop: "20px" }}>

                    <h3>Wallet Connected</h3>

                    <p>
                        <strong>Address:</strong><br />
                        {wallet.address}
                    </p>

                    <p>
                        <strong>Network:</strong><br />
                        {wallet.network}
                    </p>

                    <p>
                        <strong>Balance:</strong><br />
                        {wallet.balance} ETH
                    </p>

                </div>
            )}

        </div>
    );
}