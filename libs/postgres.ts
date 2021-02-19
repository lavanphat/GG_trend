import { Sequelize } from 'sequelize';
import config from '../config/config.json';

let db: any = null;

if (process.env.NODE_ENV === 'dev') {
  db = config.dev;
} else {
  db = config.production;
}

const sequelize: Sequelize = new Sequelize(
  db.db_name,
  db.username,
  db.password,
  {
    host: db.host,
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
