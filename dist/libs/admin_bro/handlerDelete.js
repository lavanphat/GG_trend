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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerDelete = void 0;
const admin_bro_1 = require("admin-bro");
const handlerDelete = (request, _response, context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { record, resource, currentAdmin, h, translateMessage } = context;
    if (!record) {
        throw new admin_bro_1.NotFoundError([
            `Record of given id ("${request.params.recordId}") could not be found`
        ].join('\n'), 'Action#handler');
    }
    const newRecord = yield record.update({
        DeletedAt: Date.now(),
        Status: 'Inactive'
    });
    const [populatedRecord] = yield admin_bro_1.populator([newRecord]);
    context.record = populatedRecord;
    if (record.isValid()) {
        return {
            redirectUrl: h.resourceUrl({
                resourceId: ((_a = resource._decorated) === null || _a === void 0 ? void 0 : _a.id()) || resource.id()
            }),
            notice: {
                message: translateMessage('successfullyUpdated', resource.id()),
                type: 'success'
            },
            record: populatedRecord.toJSON(currentAdmin)
        };
    }
    return {
        record: populatedRecord.toJSON(currentAdmin),
        notice: {
            message: translateMessage('thereWereValidationErrors'),
            type: 'error'
        }
    };
});
exports.handlerDelete = handlerDelete;
//# sourceMappingURL=handlerDelete.js.map