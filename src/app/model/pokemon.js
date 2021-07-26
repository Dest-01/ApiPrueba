const mongoose = require('mongoose');
const Pokemon = mongoose.Schema({
   name: {
       type: String,
       required: true,
       min: 2,
       max: 60
   },
   tipo: {
       type: String,
       required: true,
       min: 2,
       max: 60
   }
});
module.exports = mongoose.model('Pokemon',Pokemon)