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
exports.router = exports.rootPath = void 0;
const express_1 = __importDefault(require("@admin-bro/express"));
const sequelize_1 = __importDefault(require("@admin-bro/sequelize"));
const admin_bro_1 = __importStar(require("admin-bro"));
const init_models_1 = __importDefault(require("../../models/init-models"));
const handlerDelete_1 = require("./handlerDelete");
admin_bro_1.default.registerAdapter(sequelize_1.default);
admin_bro_1.ACTIONS.edit.before = (request) => __awaiter(void 0, void 0, void 0, function* () {
    request.payload = Object.assign(Object.assign({}, request.payload), { UpdatedAt: Date.now() });
    return request;
});
const adminBro = new admin_bro_1.default({
    rootPath: '/',
    resources: [
        {
            resource: init_models_1.default.Keyword,
            options: {
                editProperties: ['Query', 'Link', 'Value', 'TopicId', 'Status'],
                navigation: {
                    name: 'Table'
                },
                sort: {
                    direction: 'desc',
                    sortBy: 'CreatedAt'
                },
                actions: {
                    delete: handlerDelete_1.handlerDelete
                }
            }
        },
        {
            resource: init_models_1.default.Topic,
            options: {
                editProperties: ['Name', 'Keyword', 'Status'],
                navigation: {
                    name: 'Table'
                },
                sort: {
                    direction: 'desc',
                    sortBy: 'CreatedAt'
                },
                actions: {
                    delete: {
                        handler: handlerDelete_1.handlerDelete
                    }
                },
                listProperties: [
                    'Name',
                    'Keyword',
                    'Status',
                    'CreatedAt',
                    'UpdatedAt',
                    'DeletedAt'
                ]
            }
        }
    ],
    dashboard: {
        component: admin_bro_1.default.bundle('./components/dashboard/index')
    }
});
exports.rootPath = adminBro.options.rootPath;
exports.router = express_1.default.buildAuthenticatedRouter(adminBro, {
    authenticate: (email, password) => {
        if (email === process.env.USERNAME_ADMIN &&
            password === process.env.PASSWORD_ADMIN) {
            return true;
        }
        return null;
    },
    cookieName: 'adminbro',
    cookiePassword: 'somePassword'
}, undefined, { resave: true, saveUninitialized: false, secret: 'adminbro' });
//# sourceMappingURL=index.js.map