import { SequelizeAuto } from 'sequelize-auto';
import { dev as db } from '../config/config.json';
const auto: SequelizeAuto = new SequelizeAuto(
  db.db_name,
  db.username,
  db.password,
  {
    host: db.host,
    dialect: 'postgres',
    directory: './models', // where to write files
    port: 5432,
    caseModel: 'p', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    caseProp: 'p',
    singularize: true,
    lang: 'ts'
  }
);
auto.run();
