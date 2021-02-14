"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const design_system_1 = require("@admin-bro/design-system");
const react_1 = __importStar(require("react"));
const topic_1 = require("../../api/topic");
const header_1 = __importDefault(require("./header"));
const table_1 = __importDefault(require("./table"));
const tool_1 = __importDefault(require("./tool"));
function index() {
    const [topics, setTopics] = react_1.useState(null);
    const [selectTopic, setSelectTopic] = react_1.useState(null);
    function fetchTopic() {
        return __awaiter(this, void 0, void 0, function* () {
            setTopics(yield topic_1.fetchTopics());
        });
    }
    function selectTopicFun(topicId) {
        setSelectTopic(topicId);
    }
    react_1.useEffect(() => {
        fetchTopic();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(header_1.default, null),
        react_1.default.createElement(design_system_1.Box, { variant: "grey" },
            react_1.default.createElement(tool_1.default, { topics: topics, selectTopicParent: topicId => selectTopicFun(topicId) }),
            react_1.default.createElement(table_1.default, { topicId: selectTopic }))));
}
exports.default = index;
//# sourceMappingURL=index.js.map