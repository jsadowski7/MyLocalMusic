const { User } = require('../models');

const userData = [
  {
    name: 'hayley',
    password: 'hayley1'
  },
  {
    name: 'jake',
    password: 'jake1'
  },
  {
    name: 'marcie',
    password: 'marcie1'
  },
  {
    name: 'nikki',
    password: 'nikki1'
  },
  {
    name: 'ct',
    password: 'ct1'
  },
  {
    name: 'michael',
    password: 'michael1'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;