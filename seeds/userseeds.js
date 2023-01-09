const { User } = require('../models');
const sequelize = require('../config/connection');


const userData = [
  {
    name: 'haylee',
    password: 'haylee1232'
  },
  {
    name: 'jake',
    password: 'jake1232'
  },
  {
    name: 'marcie',
    password: 'marcie1232'
  },
  {
    name: 'nikki',
    password: 'nikki1232'
  },
  {
    name: 'rider',
    password: 'rider1232'
  },
  {
    name: 'michael',
    password: 'michael1232'
  },
];

const seedDatabase = async () => {
 await sequelize.sync({ force: false });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();


module.exports = seedDatabase;