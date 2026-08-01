import axios from "axios";

export const updateLimit = async (limit) => {

    const res = await axios.post(
        "http://localhost:5000/policy/limit",
        { limit }
    );

    return res.data;
};