const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pagina', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },

    paginas: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      
    },

  },
  { timestamps: false}
  );
};