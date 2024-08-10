module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        titulo: { type: DataTypes.STRING, allowNull: false },
        data_inicio: { type: DataTypes.DATE, allowNull: false },
        data_fim: { type: DataTypes.DATE, allowNull: false },
        administrador_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'administrador',
                key: 'id'
            }
        },
        created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
    }, {
        tableName: 'evento',
        timestamps: false
    });

    Evento.associate = function (models) {
        Evento.hasMany(models.Inscricao, { foreignKey: 'evento_id' });
        Evento.belongsTo(models.Administrador, { foreignKey: 'administrador_id' });
    };

    return Evento;
};
