const express = require("express");
const app = express();
const Router = require("./routes/main.route");
const mongoose = require("mongoose");
const PreRun = require("./Configurations/Prerun");
const cors = require("cors");
const Config = require("./Configurations/configs");
const { default: helmet } = require("helmet");

async function Run() {
    try {
        await PreRun();
        app.use(helmet());
        app.use(cors());
        app.use("/", Router);

        app.listen(Config.PORT, () => {
            console.log(`[SERVER]: Running on port ${Config.PORT}`);
        });

    } catch(e) {
        console.error(`[ERROR] An error occured: ${e.message}`);
    }
}

Run()