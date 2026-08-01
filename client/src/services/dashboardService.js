import axios from "axios";

const API = "http://localhost:5000/dashboard";

export const getDashboardStats = async () => {

    const res = await axios.get(API);

    return res.data;

};