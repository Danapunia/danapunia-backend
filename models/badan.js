module.exports = (sequelize, DataTypes) => {
  const Badan = sequelize.define('Badan', {
    name: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  Badan.associate = models => {
    Badan.hasMany(models.PuniaProgram, {
      foreignKey: {
        name: 'badan_id',
        allowNull: false,
      }
    })
    Badan.hasMany(models.Rekening, {
      foreignKey: {
        name: 'badan_id',
        allowNull: false,
      }
    })
  }

  return Badan
}