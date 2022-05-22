const mongoose = require("mongoose");
const dotenv = require("dotenv")
const CONFIG = require("./configs");
dotenv.config({ path: '../.env' })

async function PreRun() {
    try {
        const DB = await mongoose.connect(CONFIG.DB_URI);
        console.log(`[DB] Database connection established {DB: (${DB.connections[0].name})}`)
    } catch(e) {
        console.error(`[DB-ERROR] Error connecting to the Datbaase: ${e.message}`);
    }
}

module.exports = PreRun;
