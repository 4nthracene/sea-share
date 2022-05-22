const dotenv = require("dotenv");
dotenv.config({ path: '../.env' });

module.exports = {
    DB_URI: process.env.DB_URI || "mongodb://localhost:27017/seashare",
    PORT: process.env.PORT || 3000
}
