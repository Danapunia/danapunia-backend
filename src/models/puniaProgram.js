module.exports = (sequelize, DataTypes) => {
  const PuniaProgram = sequelize.define('PuniaProgram', {
    name: DataTypes.STRING,
    image: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    location: DataTypes.STRING,
    collected_fund: DataTypes.STRING,
    target_fund: DataTypes.STRING,
    deadline: DataTypes.STRING,
  })

  PuniaProgram.associate = models => {
    PuniaProgram.belongsTo(models.Badan, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'badan_id',
        allowNull: false,
      }
    })
    PuniaProgram.hasMany(models.PuniaProgress, {
      foreignKey: {
        name: 'punia_program_id',
        allowNull: false,
      }
    })
    PuniaProgram.hasMany(models.PendharmaPunia, {
      foreignKey: {
        name: 'punia_program_id',
        allowNull: false,
      }
    })
  }

  return PuniaProgram
}