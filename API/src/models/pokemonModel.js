const { DataTypes } = require('sequelize');
const validator = require('validator');


module.exports = (sequelize) => {

    sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        abilities: {
            type: DataTypes.JSONB
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isUrlValid(value) {
                    if (value && !validator.isURL(value)) {
                        throw new Error('It must be a valid URL')
                    }
                }
            }
        }
    }, 
    {
        timestamps: false
    });
}
