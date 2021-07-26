const api = require('express').Router();
api.get('*',(req,res)=>{
    res.status(404).send('Error is backend not found route')
})
module.exports = api;