const api = require('express').Router();


const {
    PokemonController,
} = require('../app/controller/pokemon_controller');

api.get('/pokemon', PokemonController.index);



api.get('*',(req,res)=>{
    res.status(404).send('Error is backend not found route')
})
module.exports = api;