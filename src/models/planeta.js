'use strict';
module.exports = (sequelize, DataTypes) => {
  const Planeta = sequelize.define('planetas', {
    nome: DataTypes.STRING,
    clima: DataTypes.STRING,
    terreno: DataTypes.STRING
  }, {});
  Planeta.associate = function(models) {
    // associations can be defined here
  };
  return Planeta;
};