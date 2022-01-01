module.exports = (sequelize, DataTypes) => {
  const PuniaProgress = sequelize.define('PuniaProgress', {
    youtube_link: DataTypes.STRING,
  })

  PuniaProgress.associate = models => {
    PuniaProgress.belongsTo(models.PuniaProgram, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'punia_program_id',
        allowNull: false,
      }
    })
  }

  return PuniaProgress
}