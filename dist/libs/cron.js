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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const keyword_1 = require("../service/keyword");
const topic_1 = require("../service/topic");
const gg_trend_1 = require("./gg_trend");
const job = new cron_1.CronJob({
    cronTime: '0 0 */72 * * *',
    onTick: () => __awaiter(void 0, void 0, void 0, function* () {
        var e_1, _a, e_2, _b;
        var _c;
        const topics = yield topic_1.getKeywordInTopic();
        try {
            for (var topics_1 = __asyncValues(topics), topics_1_1; topics_1_1 = yield topics_1.next(), !topics_1_1.done;) {
                const topic = topics_1_1.value;
                if (topic.Keyword) {
                    const resultsSearch = yield Promise.all((_c = topic.Keyword) === null || _c === void 0 ? void 0 : _c.map(item => gg_trend_1.relatedKeyword(-3, item)));
                    try {
                        for (var resultsSearch_1 = (e_2 = void 0, __asyncValues(resultsSearch)), resultsSearch_1_1; resultsSearch_1_1 = yield resultsSearch_1.next(), !resultsSearch_1_1.done;) {
                            const result = resultsSearch_1_1.value;
                            if (result.length > 0) {
                                yield Promise.all(result.map(item => {
                                    if (item.value > 100) {
                                        keyword_1.upsertKeyword({
                                            Value: item.value,
                                            Query: item.query,
                                            Link: item.link,
                                            TopicId: topic.Id
                                        });
                                    }
                                }));
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (resultsSearch_1_1 && !resultsSearch_1_1.done && (_b = resultsSearch_1.return)) yield _b.call(resultsSearch_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (topics_1_1 && !topics_1_1.done && (_a = topics_1.return)) yield _a.call(topics_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log('success');
    }),
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
});
job.start();
//# sourceMappingURL=cron.js.map