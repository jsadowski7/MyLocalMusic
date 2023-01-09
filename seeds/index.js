const seedArtists = require('./artistseeds');
const seedSaved = require('./savedseeds');
const seedUser = require('./userseeds');
const colors = require("colors");
const sequelize = require('../config/connection');
const seedDatabase = require('./userseeds');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n'.bold.green);
 await seedArtists();
  console.log('\n----- ARTISTS SEEDED -----\n'.bold.green);

  await seedSaved();
  console.log('\n----- SAVED ARTISTS SEEDED -----\n'.bold.green);

  await seedDatabase();
  console.log('\n----- USER SEEDED -----\n'.bold.green); 
  process.exit(0);
};



seedAll();