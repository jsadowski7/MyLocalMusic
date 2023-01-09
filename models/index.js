const Artists = require('./Artists');
const Saved = require('./Saved');
const User = require('./User');

 User.hasMany(Artists, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  Artists.belongsTo(User, {
    foreignKey: 'user_id'
  })


Saved.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Saved, {
    foreignKey: 'user_id'

}) 


module.exports = {Artists, Saved, User};