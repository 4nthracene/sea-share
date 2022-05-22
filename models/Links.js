const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
    socials: [
        {
            name: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true,
            }
        }
    ],
    Links: [
        {
            name: {
                type: String,
                required: true
            }, 
            link: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model("Links", LinkSchema);
