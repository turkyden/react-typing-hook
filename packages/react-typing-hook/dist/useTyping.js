(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.useTyping = factory(global.React));
}(this, (function (react) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function useTyping(_a) {
        var steps = _a.steps, loop = _a.loop, _b = _a.speed, speed = _b === void 0 ? 60 : _b;
        var ref = react.useRef(null);
        function typing(node, speed) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var args_1, args_1_1, arg, _a, e_1_1;
                var e_1, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 12, 13, 14]);
                            args_1 = __values(args), args_1_1 = args_1.next();
                            _c.label = 1;
                        case 1:
                            if (!!args_1_1.done) return [3 /*break*/, 11];
                            arg = args_1_1.value;
                            _a = typeof arg;
                            switch (_a) {
                                case "string": return [3 /*break*/, 2];
                                case "number": return [3 /*break*/, 4];
                                case "function": return [3 /*break*/, 6];
                            }
                            return [3 /*break*/, 8];
                        case 2: return [4 /*yield*/, edit(node, speed, arg)];
                        case 3:
                            _c.sent();
                            return [3 /*break*/, 10];
                        case 4: return [4 /*yield*/, wait(arg)];
                        case 5:
                            _c.sent();
                            return [3 /*break*/, 10];
                        case 6: return [4 /*yield*/, arg.apply(void 0, __spread([node, speed], args))];
                        case 7:
                            _c.sent();
                            return [3 /*break*/, 10];
                        case 8: return [4 /*yield*/, arg];
                        case 9:
                            _c.sent();
                            _c.label = 10;
                        case 10:
                            args_1_1 = args_1.next();
                            return [3 /*break*/, 1];
                        case 11: return [3 /*break*/, 14];
                        case 12:
                            e_1_1 = _c.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 14];
                        case 13:
                            try {
                                if (args_1_1 && !args_1_1.done && (_b = args_1.return)) _b.call(args_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 14: return [2 /*return*/];
                    }
                });
            });
        }
        function edit(node, speed, text) {
            return __awaiter(this, void 0, void 0, function () {
                var textContent, overlap;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            textContent = node.textContent || '';
                            overlap = getOverlap(textContent, text);
                            return [4 /*yield*/, perform(node, speed, __spread(deleter(textContent, overlap), writer(text, overlap)))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function wait(ms) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function perform(node, speed, edits) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, op, e_2_1;
                var e_2, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, 6, 7]);
                            _a = __values(editor(edits)), _b = _a.next();
                            _d.label = 1;
                        case 1:
                            if (!!_b.done) return [3 /*break*/, 4];
                            op = _b.value;
                            op(node);
                            return [4 /*yield*/, wait(speed + speed * (Math.random() - 0.5))];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _b = _a.next();
                            return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 7];
                        case 5:
                            e_2_1 = _d.sent();
                            e_2 = { error: e_2_1 };
                            return [3 /*break*/, 7];
                        case 6:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                            return [7 /*endfinally*/];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        function editor(edits) {
            var _loop_1, edits_1, edits_1_1, edit_1, e_3_1;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _loop_1 = function (edit_1) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, function (node) { return requestAnimationFrame(function () { return (node.textContent = edit_1); }); }];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        edits_1 = __values(edits), edits_1_1 = edits_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!edits_1_1.done) return [3 /*break*/, 5];
                        edit_1 = edits_1_1.value;
                        return [5 /*yield**/, _loop_1(edit_1)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        edits_1_1 = edits_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        }
        function writer(_a, startIndex, endIndex) {
            var _b = __read(_a), text = _b.slice(0);
            if (startIndex === void 0) { startIndex = 0; }
            if (endIndex === void 0) { endIndex = text.length; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(startIndex < endIndex)) return [3 /*break*/, 2];
                        return [4 /*yield*/, text.slice(0, ++startIndex).join("")];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        }
        function deleter(_a, startIndex, endIndex) {
            var _b = __read(_a), text = _b.slice(0);
            if (startIndex === void 0) { startIndex = 0; }
            if (endIndex === void 0) { endIndex = text.length; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(endIndex > startIndex)) return [3 /*break*/, 2];
                        return [4 /*yield*/, text.slice(0, --endIndex).join("")];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        }
        function getOverlap(start, _a) {
            var _b = __read(_a), end = _b.slice(0);
            return __spread(start, [NaN]).findIndex(function (char, i) { return end[i] !== char; });
        }
        var loopedType = typing;
        react.useEffect(function () {
            if (ref.current != null) {
                if (loop === Infinity) {
                    typing.apply(void 0, __spread([ref.current, speed], steps, [loopedType]));
                }
                else if (typeof loop === "number") {
                    typing.apply(void 0, __spread([ref.current,
                        speed], Array(loop)
                        .fill(steps)
                        .flat()));
                }
                else {
                    typing.apply(void 0, __spread([ref.current, speed], steps));
                }
            }
        }, []);
        return ref;
    }

    return useTyping;

})));
//# sourceMappingURL=useTyping.js.map
