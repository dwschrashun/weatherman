var router = require('express').Router();
module.exports = router;

router.use("/weather", require("./weather"));