const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    healthScore:{
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    imagen:{
      type: DataTypes.TEXT,
      allowNull:true,
    },
    steps:{
      type:DataTypes.TEXT,
      allowNull:true,
    },
    create:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
  },{timestamps:false}
  
  );
};
