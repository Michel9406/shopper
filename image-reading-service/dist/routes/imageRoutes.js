"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var imageController_1 = require("../controllers/imageController");
var router = (0, express_1.Router)();
router.post('/analyze', imageController_1.analyzeImage);
router.get('/:id/info', imageController_1.getImageInfo);
router.post('/process', imageController_1.processImage);
exports.default = router;
