const { Saved } = require('../models');

const savedData = [
  {
    artist: '',
    genre: 14.99,
    user_id: 1
  },
  {
    artist: 'Plain T-Shirt',
    genre: 14.99,
    user_id: 2
  },
  {
    artist: 'Plain T-Shirt',
    genre: 14.99,
    user_id: 3
  },
  
 
];

const seedSaved = () => Saved.bulkCreate(savedData);

module.exports = seedSaved;