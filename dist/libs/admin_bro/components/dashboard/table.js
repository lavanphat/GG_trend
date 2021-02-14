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
function table({ topicId }) {
    const [keywords, setKeywords] = react_1.useState(null);
    const [offset, setOffset] = react_1.useState(1);
    function fetchKeyword() {
        return __awaiter(this, void 0, void 0, function* () {
            if (topicId) {
                setKeywords(yield keywords_1.fetchKeywords(offset, topicId));
            }
        });
    }
    react_1.useEffect(() => {
        fetchKeyword();
    }, [offset, topicId]);
    return (react_1.default.createElement(design_system_1.Box, { pt: "x4", variant: "white" }, (keywords === null || keywords === void 0 ? void 0 : keywords.list) ? (react_1.default.createElement(design_system_1.Table, null,
        react_1.default.createElement(design_system_1.TableHead, null,
            react_1.default.createElement(design_system_1.TableRow, null,
                react_1.default.createElement(design_system_1.TableCell, null, "Query"),
                react_1.default.createElement(design_system_1.TableCell, null, "Link"),
                react_1.default.createElement(design_system_1.TableCell, null, "Value"),
                react_1.default.createElement(design_system_1.TableCell, null, "Status"),
                react_1.default.createElement(design_system_1.TableCell, null, "Created At"),
                react_1.default.createElement(design_system_1.TableCell, null, "Updated At"))),
        keywords.list.length > 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(design_system_1.TableBody, null, keywords.list.map(item => (react_1.default.createElement(design_system_1.TableRow, { key: item.Id },
                react_1.default.createElement(design_system_1.TableCell, null, item.Query),
                react_1.default.createElement(design_system_1.TableCell, null, item.Link),
                react_1.default.createElement(design_system_1.TableCell, null, item.Value),
                react_1.default.createElement(design_system_1.TableCell, null, item.Status),
                react_1.default.createElement(design_system_1.TableCell, null, new Date(`${item.CreatedAt}`).toLocaleString('vi-VN')),
                react_1.default.createElement(design_system_1.TableCell, null, new Date(`${item.UpdatedAt}`).toLocaleString('vi-VN')))))),
            react_1.default.createElement(design_system_1.Text, { py: "xl", textAlign: "center" },
                react_1.default.createElement(design_system_1.Pagination, { total: keywords.count, page: offset, perPage: keywords.list.length, onChange: item => setOffset(item) })))) : (react_1.default.createElement(design_system_1.Box, null, "No content")))) : ('Choose topic')));
}
exports.default = table;
//# sourceMappingURL=table.js.map