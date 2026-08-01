import axios from "axios";

const API = "http://localhost:5000/wallet";

export const getWallet = async () => {
    const res = await axios.get(API);
    return res.data;
};