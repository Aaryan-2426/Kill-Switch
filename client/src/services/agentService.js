import axios from "axios";

const API = "http://localhost:5000/agent";

export const analyzePrompt = async (prompt) => {

    const res = await axios.post(`${API}/analyze`, {
        prompt
    });

    return res.data;

};