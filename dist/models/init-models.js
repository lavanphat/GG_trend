"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = exports.Keyword = void 0;
const postgres_1 = __importDefault(require("../libs/postgres"));
const keyword_1 = require("./keyword");
Object.defineProperty(exports, "Keyword", { enumerable: true, get: function () { return keyword_1.Keyword; } });
const topic_1 = require("./topic");
Object.defineProperty(exports, "Topic", { enumerable: true, get: function () { return topic_1.Topic; } });
function initModels(sequelize) {
    keyword_1.Keyword.initModel(sequelize);
    topic_1.Topic.initModel(sequelize);
    keyword_1.Keyword.belongsTo(topic_1.Topic, { as: "Topic", foreignKey: "TopicId" });
    topic_1.Topic.hasMany(keyword_1.Keyword, { as: "Keywords", foreignKey: "TopicId" });
    return {
        Keyword: keyword_1.Keyword,
        Topic: topic_1.Topic,
    };
}
exports.default = initModels(postgres_1.default);
//# sourceMappingURL=init-models.js.map