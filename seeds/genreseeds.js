const { Genre } = require('../models');

const genreData = [
  {
    name: 'indie'
  },
  {
    name: 'country'
  },
  {
    name: 'rock'
  },
  {
    name: 'pop'
  },
 
];

const seedGenre = () => { Genre.bulkCreate(genreData);
};
module.exports = seedGenre;