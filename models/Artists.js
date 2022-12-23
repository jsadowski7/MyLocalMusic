const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { Artists } = require('.');


class Artists extends Model {}

Artists.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      band_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      img_filename:{
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
        },

      artist_site:{
        type: DataTypes.STRING,
        allowNull: false,

      spotify:{
        type: DataTypes.STRING,
        allowNull: false,
      },

    genre_id:{
        type: DataTypes.INTEGER,
        references: {
          model: 'genre',
          key: 'id',
        },
    }
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
      }
    );


module.exports = Artists;