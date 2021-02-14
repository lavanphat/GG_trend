"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeywordInTopic = exports.getAllTopic = void 0;
const init_models_1 = require("../models/init-models");
function getAllTopic() {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        const topics = yield init_models_1.Topic.findAll({
            attributes: [
                ['id', 'value'],
                ['name', 'text']
            ]
        });
        resolve(topics);
    }));
}
exports.getAllTopic = getAllTopic;
function getKeywordInTopic() {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        const keywords = yield init_models_1.Topic.findAll({
            attributes: ['Keyword', 'Id'],
            where: { Status: 'Active' }
        });
        resolve(keywords);
    }));
}
exports.getKeywordInTopic = getKeywordInTopic;
//# sourceMappingURL=topic.js.map