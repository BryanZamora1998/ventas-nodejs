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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tiposIdentificacionBO_1 = require("../bo/tiposIdentificacionBO");
var Response_1 = require("../dto/Response");
var router = express_1.Router();
router.get("/tiposIdentificacion", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, error_1, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 5]);
                _b = (_a = res).send;
                _c = Response_1.Response200;
                _d = ["OK"];
                return [4 /*yield*/, tiposIdentificacionBO_1.getTiposIdentificacionBO()];
            case 1: return [4 /*yield*/, _c.apply(void 0, _d.concat([_g.sent()]))];
            case 2: return [2 /*return*/, _b.apply(_a, [_g.sent()])];
            case 3:
                error_1 = _g.sent();
                _f = (_e = res).send;
                return [4 /*yield*/, Response_1.Response400(error_1, null)];
            case 4: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.get("/tiposIdentificacion/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, error_2, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 5]);
                _b = (_a = res).send;
                _c = Response_1.Response200;
                _d = ["OK"];
                return [4 /*yield*/, tiposIdentificacionBO_1.getTipoIdentificacionBO(req.params.id)];
            case 1: return [4 /*yield*/, _c.apply(void 0, _d.concat([_g.sent()]))];
            case 2: return [2 /*return*/, _b.apply(_a, [_g.sent()])];
            case 3:
                error_2 = _g.sent();
                _f = (_e = res).send;
                return [4 /*yield*/, Response_1.Response400(error_2, null)];
            case 4: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.post("/tiposIdentificacion", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, error_3, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 5]);
                _b = (_a = res).send;
                _c = Response_1.Response200;
                _d = ["OK"];
                return [4 /*yield*/, tiposIdentificacionBO_1.postTipoIdentificacionBO(req.body)];
            case 1: return [4 /*yield*/, _c.apply(void 0, _d.concat([_g.sent()]))];
            case 2: return [2 /*return*/, _b.apply(_a, [_g.sent()])];
            case 3:
                error_3 = _g.sent();
                _f = (_e = res).send;
                return [4 /*yield*/, Response_1.Response400(error_3, null)];
            case 4: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.put("/tiposIdentificacion", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, error_4, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 5]);
                _b = (_a = res).send;
                _c = Response_1.Response200;
                _d = ["OK"];
                return [4 /*yield*/, tiposIdentificacionBO_1.putTipoIdentificacionBO(req.body)];
            case 1: return [4 /*yield*/, _c.apply(void 0, _d.concat([_g.sent()]))];
            case 2: return [2 /*return*/, _b.apply(_a, [_g.sent()])];
            case 3:
                error_4 = _g.sent();
                _f = (_e = res).send;
                return [4 /*yield*/, Response_1.Response400(error_4, null)];
            case 4: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.delete("/tiposIdentificacion/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, error_5, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 5]);
                _b = (_a = res).send;
                _c = Response_1.Response200;
                _d = ["OK"];
                return [4 /*yield*/, tiposIdentificacionBO_1.deleteTipoIdentificacionBO(req.params.id)];
            case 1: return [4 /*yield*/, _c.apply(void 0, _d.concat([_g.sent()]))];
            case 2: return [2 /*return*/, _b.apply(_a, [_g.sent()])];
            case 3:
                error_5 = _g.sent();
                _f = (_e = res).send;
                return [4 /*yield*/, Response_1.Response400(error_5, null)];
            case 4: return [2 /*return*/, _f.apply(_e, [_g.sent()])];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
