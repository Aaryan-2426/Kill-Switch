import axios from "axios";

const API = "http://localhost:5000/alerts";

export const getAlerts = async () => {

    const res = await axios.get(API);

    return res.data;

};