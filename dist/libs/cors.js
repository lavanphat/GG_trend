"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const whitelist = ['http://gg-trends.herokuapp.com'];
const corsOptions = {
    origin: (origin, callback) => {
        if (origin && whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
cors_1.default(corsOptions);
//# sourceMappingURL=cors.js.map