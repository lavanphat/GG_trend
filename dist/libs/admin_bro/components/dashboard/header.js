"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const design_system_1 = require("@admin-bro/design-system");
const react_1 = __importDefault(require("react"));
const pageHeaderHeight = 284;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;
function dashboard() {
    return (react_1.default.createElement(design_system_1.Box, { position: "relative", overflow: "hidden" },
        react_1.default.createElement(design_system_1.Box, { position: "absolute", top: 50, left: -10, opacity: [0.2, 0.4, 1], animate: true },
            react_1.default.createElement(design_system_1.Illustration, { variant: "Rocket", children: "" })),
        react_1.default.createElement(design_system_1.Box, { position: "absolute", top: -70, right: -15, opacity: [0.2, 0.4, 1], animate: true },
            react_1.default.createElement(design_system_1.Illustration, { variant: "Moon", children: "" })),
        react_1.default.createElement(design_system_1.Box, { bg: "grey100", height: pageHeaderHeight, py: pageHeaderPaddingY, px: ['default', 'lg', pageHeaderPaddingX] },
            react_1.default.createElement(design_system_1.Text, { textAlign: "center", color: "white" },
                react_1.default.createElement(design_system_1.H2, null, 'Welcome on Board!'),
                react_1.default.createElement(design_system_1.Text, { opacity: 0.8 }, 'Now you are one of us! We prepared a few tips for you to start:')))));
}
exports.default = dashboard;
//# sourceMappingURL=header.js.map