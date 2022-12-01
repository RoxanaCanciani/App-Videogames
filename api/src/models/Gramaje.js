const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('gramaje', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },

    gramajes: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      
    },

  },
  { timestamps: false}
  );
};
