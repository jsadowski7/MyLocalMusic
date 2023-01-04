const Artists = require('./Artists');
const Genre = require('./Genre');
const Saved = require('./Saved');
const User = require('./User');

 User.hasMany(Artists, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Genre.hasMany(Artists, {
    foreignKey: 'user_id'
});

Saved.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Saved, {
    foreignKey: 'user_id'

}) 


module.exports = {Artists, Genre, Saved, User};