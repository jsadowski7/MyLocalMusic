const { Saved, User } = require('../models');

const savedData = [
  {
    artist: '',
    genre: 14.99,
  
  },
  {
    artist: 'Plain T-Shirt',
    genre: 14.99,
   
  },
  {
    artist: 'Plain T-Shirt',
    genre: 14.99,
   
  },
  
 
];

const seedSaved = () => Saved.bulkCreate(savedData);

module.exports = seedSaved;