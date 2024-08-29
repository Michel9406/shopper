"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/images', imageRoutes_1.default);
exports.default = app;
