const seedArtists = require('./artistseeds');
const seedGenre = require('./genreseeds');
const seedSaved = require('./savedseeds');
const seedUser = require('./userseeds');

const sequelize = require('../config/connection');
const seedDatabase = require('./userseeds');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
 await seedArtists();
  console.log('\n----- ARTISTS SEEDED -----\n');

 await seedGenre();
  console.log('\n----- GENRES SEEDED -----\n');

  await seedSaved();
  console.log('\n----- SAVED ARTISTS SEEDED -----\n');

  await seedDatabase();
  console.log('\n----- USER SEEDED -----\n'); 
  process.exit(0);
};



seedAll();