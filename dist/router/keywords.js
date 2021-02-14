"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const keyword_1 = require("../controller/keyword");
const router = express_1.default.Router();
router.route('/').get(keyword_1.getAllKeyword);
router.route('/copy-tag').get(keyword_1.copyTag);
exports.default = router;
//# sourceMappingURL=keywords.js.map