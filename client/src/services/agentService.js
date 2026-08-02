import axios from "axios";

const API = "http://localhost:5000/agent";

export const analyzePrompt = async (transaction) => {

    const res = await axios.post(`${API}/analyze`, transaction);

    return res.data;

};