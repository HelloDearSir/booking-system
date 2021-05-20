const express = require("express");
const router = express.Router();

router.get("/example", (req,res)=>{
    res.send("message is here bois");
})
module.exports = router;