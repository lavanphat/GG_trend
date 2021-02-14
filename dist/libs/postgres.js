"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = require("../config/config.json");
const sequelize = new sequelize_1.Sequelize(config_json_1.dev.db_name, config_json_1.dev.username, config_json_1.dev.password, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});
exports.default = sequelize;
//# sourceMappingURL=postgres.js.map