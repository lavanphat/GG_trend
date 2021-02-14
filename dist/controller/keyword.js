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
exports.copyTag = exports.getAllKeyword = void 0;
const keyword_1 = require("../service/keyword");
function getAllKeyword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { topicId, offset } = req.query;
        const keywords = yield keyword_1.getKeywords(offset, topicId);
        res.status(200).json(keywords);
    });
}
exports.getAllKeyword = getAllKeyword;
function copyTag(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { topicId } = req.query;
        const keywords = yield keyword_1.getKeywordToTag(topicId);
        res.status(200).json(keywords);
    });
}
exports.copyTag = copyTag;
//# sourceMappingURL=keyword.js.map