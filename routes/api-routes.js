const express = require("express");
const router = express.Router();

router.get('/example', (req,res)=>{
     res.send('There goes the boom `www.youtube.com`')
});

module.exports = router;