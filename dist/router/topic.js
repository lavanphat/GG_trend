"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const topic_1 = require("../controller/topic");
const router = express_1.default.Router();
router.route('/').get(topic_1.getTopics);
exports.default = router;
//# sourceMappingURL=topic.js.map