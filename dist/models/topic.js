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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = void 0;
const sequelize_1 = __importStar(require("sequelize"));
class Topic extends sequelize_1.Model {
    static initModel(sequelize) {
        Topic.init({
            Id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: false,
                primaryKey: true,
                field: 'id'
            },
            Name: {
                type: sequelize_1.DataTypes.STRING(127),
                allowNull: true,
                field: 'name'
            },
            Keyword: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
                allowNull: true,
                field: 'keyword'
            },
            Status: {
                type: sequelize_1.DataTypes.ENUM("Active", "Inactive"),
                allowNull: true,
                defaultValue: "Active",
                field: 'status'
            },
            CreatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize_1.default.fn('now'),
                field: 'created_at'
            },
            UpdatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                field: 'updated_at'
            },
            DeletedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                field: 'deleted_at'
            }
        }, {
            sequelize,
            tableName: 'topics',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "topic_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return Topic;
    }
}
exports.Topic = Topic;
//# sourceMappingURL=topic.js.map