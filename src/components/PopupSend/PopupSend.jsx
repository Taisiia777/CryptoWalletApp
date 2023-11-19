import React, { useState } from 'react';
import styles from './PopupSend.module.css';
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";


 const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
        if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");

        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
        });
        console.log({ ether, addr });
        console.log("tx", tx);
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
    }
};

export const PopupSend = () => {
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setError();
        await startPayment({
            setError,
            setTxs,
            ether: data.get("ether"),
            addr: data.get("addr")
        });
    };
    return (
        <form  onSubmit={handleSubmit}>
            <div >
                <main >
                    <h1>
                        Send ETH payment
                    </h1>
                    <div >
                        <div >
                            <input
                                type="text"
                                name="addr"

                                placeholder="Recipient Address"
                            />
                        </div>
                        <div >
                            <input
                                name="ether"
                                type="text"

                                placeholder="Amount in ETH"
                            />
                        </div>
                    </div>
                </main>
                <footer>
                    <button
                        type="submit"
                    >
                        Pay now
                    </button>
                    <ErrorMessage message={error} />
                    <TxList txs={txs} />
                </footer>
            </div>
        </form>
    );
};

export default PopupSend;