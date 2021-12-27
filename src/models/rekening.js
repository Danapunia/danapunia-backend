module.exports = (sequelize, DataTypes) => {
  const Rekening = sequelize.define('Rekening', {
    account_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    account_provider: DataTypes.STRING,
  })

  Rekening.associate = models => {
    Rekening.belongsTo(models.Badan, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'badan_id',
        allowNull: false,
      }
    })
  }

  return Rekening
}