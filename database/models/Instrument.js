'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    static associate(models) {}
  }

  Instrument.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Instrument',
  });

  return Instrument;
};
