const Pokemon = require('../model');

class PokemonController {

   async index(req, res){
       try{
           const pokemon = await Pokemon.find();
           return  res.json({
               pokemon
           })
       }catch(err){
           return res.status(404).send('error');
       }
   }
}

module.exports = new PokemonController;