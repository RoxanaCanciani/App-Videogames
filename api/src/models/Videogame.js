const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },

    description:{
      type:DataTypes.STRING,
      allowNull:false,
     
    },
     released:{
      type:DataTypes.STRING,
      allowNull:true,
     },
rating:{
type: DataTypes.INTEGER,
allowNull:true,
},
image:{
  type:DataTypes.STRING,
  allowNull:true,
},

     platforms:{
      type:DataTypes.JSON(DataTypes.TEXT),
      allowNull:true,
     },

    
    createdInBd:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    }

  },
  { timestamps: false}
  );
};
