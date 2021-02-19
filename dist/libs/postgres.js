"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = __importDefault(require("../config/config.json"));
let db = null;
if (process.env.NODE_ENV === 'dev') {
    db = config_json_1.default.dev;
}
else {
    db = config_json_1.default.production;
}
const sequelize = new sequelize_1.Sequelize(db.db_name, db.username, db.password, {
    host: db.host,
    dialect: 'postgres',
    logging: false
});
exports.default = sequelize;
//# sourceMappingURL=postgres.js.map