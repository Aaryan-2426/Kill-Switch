import axios from "axios";

const API = "http://localhost:5000/logs";

export const getLogs = async () => {

    const res = await axios.get(API);

    return res.data;

};