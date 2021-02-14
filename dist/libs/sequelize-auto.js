"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_auto_1 = require("sequelize-auto");
const config_json_1 = require("../config/config.json");
const auto = new sequelize_auto_1.SequelizeAuto(config_json_1.dev.db_name, config_json_1.dev.username, config_json_1.dev.password, {
    host: config_json_1.dev.host,
    dialect: 'postgres',
    directory: './models',
    port: 5432,
    caseModel: 'p',
    caseFile: 'c',
    caseProp: 'p',
    singularize: true,
    lang: 'ts'
});
auto.run();
//# sourceMappingURL=sequelize-auto.js.map