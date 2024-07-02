// models.js
import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sabergrou_webservice', 'sabergrou', 'WebS3rvice', {
  host: 'mysql-sabergrou.alwaysdata.net',
  dialect: 'mysql',
});

class Movie extends Model {}

Movie.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,    
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  date_creation: {
    type: DataTypes.DATE
  },
  note: {
    type: DataTypes.INTEGER
  },
  category: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Movie',
  tableName: 'movies'
});

await sequelize.sync();

export { Movie, sequelize };
