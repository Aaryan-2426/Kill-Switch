import axios from "axios";

const API = "http://localhost:5000/transactions";

export const getTransactions = async () => {
  const res = await axios.get(API);
  return res.data;
};