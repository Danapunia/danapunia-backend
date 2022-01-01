module.exports = (sequelize, DataTypes) => {
  const PendharmaPunia = sequelize.define('PendharmaPunia', {
    name: DataTypes.STRING,
    amount: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  })

  PendharmaPunia.associate = models => {
    PendharmaPunia.belongsTo(models.PuniaProgram, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'punia_program_id',
        allowNull: false,
      }
    })
  }

  return PendharmaPunia
}