const { Genre } = require('../models');

const genreData = [
  {
    name: 'heavy metal'
  },
  {
    name: 'pop'
  },
  {
    name: 'rock'
  },
  {
    name: 'rap'
  },
 
];

const seedGenre = () => { Genre.bulkCreate(genreData);
};
module.exports = seedGenre;