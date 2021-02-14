"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const admin_bro_1 = require("./libs/admin_bro");
require("./utils/prototype");
const topic_1 = __importDefault(require("./router/topic"));
const keywords_1 = __importDefault(require("./router/keywords"));
require("./libs/cron");
const app = express_1.default();
dotenv_1.default.config();
app.use(morgan_1.default('dev'));
app.use(admin_bro_1.rootPath, admin_bro_1.router);
app.use('/api/topics', topic_1.default);
app.use('/api/keywords', keywords_1.default);
app.use((_req, _res, next) => {
    next(http_errors_1.default(404));
});
module.exports = app;
exports.default = app;
//# sourceMappingURL=app.js.map