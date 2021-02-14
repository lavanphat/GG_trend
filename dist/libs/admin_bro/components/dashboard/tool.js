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
Object.defineProperty(exports, "__esModule", { value: true });
const design_system_1 = require("@admin-bro/design-system");
const react_1 = __importStar(require("react"));
const keywords_1 = require("../../api/keywords");
function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
function tool({ topics, selectTopicParent }) {
    const [topic, setTopic] = react_1.useState(null);
    const [isCopy, setIsCopy] = react_1.useState(false);
    function selectTopic(topicId, topicName) {
        selectTopicParent(topicId);
        setTopic({ topicName, topicId });
        setIsCopy(false);
    }
    function copyTagFunc() {
        return __awaiter(this, void 0, void 0, function* () {
            if (topic) {
                const copyString = yield keywords_1.copyTag(topic === null || topic === void 0 ? void 0 : topic.topicId);
                copyToClipboard(copyString);
                setIsCopy(true);
            }
        });
    }
    return (react_1.default.createElement(design_system_1.Box, { variant: "white", flex: true, alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement(design_system_1.Text, null, "Keyword by topic from Google Trend"),
        topic && (react_1.default.createElement(design_system_1.Badge, { size: "lg", variant: "primary" }, topic.topicName)),
        react_1.default.createElement(design_system_1.Box, { variant: "white", flex: true },
            (topic === null || topic === void 0 ? void 0 : topic.topicId) && (react_1.default.createElement(design_system_1.Button, { variant: "primary", mr: "1rem", onClick: () => copyTagFunc() }, isCopy ? 'Copied' : 'Copy Tag')),
            react_1.default.createElement(design_system_1.DropDown, { stick: "right" },
                react_1.default.createElement(design_system_1.DropDownTrigger, null,
                    react_1.default.createElement(design_system_1.Button, null, "Topics")),
                react_1.default.createElement(design_system_1.DropDownMenu, null, topics &&
                    topics.map(item => (react_1.default.createElement(design_system_1.DropDownItem, { key: item.value, onClick: () => selectTopic(item.value, item.text) },
                        react_1.default.createElement(design_system_1.Icon, { icon: "Video" }),
                        item.text))))),
            ' ')));
}
exports.default = tool;
//# sourceMappingURL=tool.js.map