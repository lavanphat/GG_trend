import { Sequelize } from 'sequelize';
import { dev as db } from '../config/config.json';

const sequelize: Sequelize = new Sequelize(
  db.db_name,
  db.username,
  db.password,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
);

// sequelize
//   .authenticate()
//   .then(() => {
//     // tslint:disable-next-line:no-console
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     // tslint:disable-next-line:no-console
//     console.error('Unable to connect to the database:', err);
//   });

export default sequelize;
