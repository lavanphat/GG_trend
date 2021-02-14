"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.relatedKeyword = void 0;
const google_trends_api_1 = __importDefault(require("google-trends-api"));
function relatedKeyword(numberAgo, keyword, property = 'youtube') {
    return new Promise((resolve, reject) => {
        const date = new Date();
        console.log('object', keyword);
        google_trends_api_1.default
            .relatedQueries({
            keyword,
            startTime: date.addDays(numberAgo),
            property
        })
            .then((results) => {
            var _a;
            const result = JSON.parse(results);
            resolve((_a = result.default.rankedList[1]) === null || _a === void 0 ? void 0 : _a.rankedKeyword);
        })
            .catch((err) => {
            console.log('err', err);
            reject(err);
        });
    });
}
exports.relatedKeyword = relatedKeyword;
//# sourceMappingURL=gg_trend.js.map