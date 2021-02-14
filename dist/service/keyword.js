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
exports.getKeywordToTag = exports.upsertKeyword = exports.getKeywords = void 0;
const init_models_1 = require("../models/init-models");
const LIMIT = 10;
function getKeywords(offset = 1, topicId) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        const keywords = yield init_models_1.Keyword.findAndCountAll({
            where: { TopicId: topicId },
            limit: LIMIT,
            offset: LIMIT * (offset - 1),
            order: [['Value', 'DESC']]
        });
        resolve({ count: keywords.count, list: keywords.rows });
    }));
}
exports.getKeywords = getKeywords;
function upsertKeyword(keyword) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        yield init_models_1.Keyword.upsert(keyword, { fields: ['Query', 'Value'] });
        resolve();
    }));
}
exports.upsertKeyword = upsertKeyword;
function getKeywordToTag(topicId = 1) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        let stringCopy = '';
        let stopWhile = true;
        let offset = 0;
        while (stopWhile) {
            const keywords = yield init_models_1.Keyword.findAll({
                where: { TopicId: topicId },
                limit: 10,
                offset
            });
            if (keywords.length < 10) {
                stopWhile = false;
            }
            for (const keyword of keywords) {
                if (keyword.Query && stringCopy.length + ((_a = keyword.Query) === null || _a === void 0 ? void 0 : _a.length) < 500) {
                    stringCopy += keyword.Query + ',';
                }
                else {
                    stopWhile = false;
                }
            }
            offset += 10;
        }
        stringCopy = stringCopy.slice(0, -1);
        resolve(stringCopy);
    }));
}
exports.getKeywordToTag = getKeywordToTag;
//# sourceMappingURL=keyword.js.map