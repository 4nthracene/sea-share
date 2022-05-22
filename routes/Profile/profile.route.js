const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
    return res.json({
        message: 'Working go and edit the profile.',
    });
});

module.exports = router;
