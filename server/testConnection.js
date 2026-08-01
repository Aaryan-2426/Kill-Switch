require("dotenv").config();

const contract = require("./config/blockchain");

async function main() {
    try {
        const owner = await contract.owner();

        console.log("✅ Connected Successfully");
        console.log("Owner:", owner);
    } catch (err) {
        console.log(err);
    }
}

main();